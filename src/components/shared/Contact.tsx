"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';


const serviceLabels: Record<string, string> = {
  "staffing-temp": "Temporary Staffing",
  "staffing-perm": "Permanent Recruitment",
  "staffing-hr": "HR Consultancy",
  "cleaning-residential": "Residential Cleaning",
  "cleaning-commercial": "Commercial Cleaning",
  "cleaning-specialized": "Specialized Cleaning",
  "both": "Both Services"
};

// Define the component's state
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Make sure a service is selected
    if (!formData.service) {
      toast.error("Please select a service interest.");
      setFormStatus('idle');
      return;
    }

    try {
      // First, save to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Then, send email notification
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceLabel: serviceLabels[formData.service]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email notification');
      }

      // If both operations succeed
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormStatus('success');
      // Reset form fields
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      // Go back to the form after a few seconds
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const renderFormContent = () => {
    switch (formStatus) {
      case 'success':
        return (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600">Your message has been sent successfully.</p>
          </div>
        );
      case 'error':
        return (
          <div className="text-center py-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Something Went Wrong</h3>
            <p className="text-slate-600">Please try again later.</p>
          </div>
        );
      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... your form fields remain exactly the same ... */}
            <div className="grid md:grid-cols-2 gap-6">
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">
                         Full Name *
                     </label>
                     <Input
                         type="text"
                         required
                         value={formData.name}
                         onChange={(e) => handleInputChange('name', e.target.value)}
                         placeholder="Your name"
                         className="w-full"
                     />
                 </div>
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">
                         Email Address *
                     </label>
                     <Input
                         type="email"
                         required
                         value={formData.email}
                         onChange={(e) => handleInputChange('email', e.target.value)}
                         placeholder="your@email.com"
                         className="w-full"
                     />
                 </div>
             </div>

             <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">
                     Phone Number
                 </label>
                 <Input
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => handleInputChange('phone', e.target.value)}
                     placeholder="+44 742 821 2756"
                     className="w-full"
                 />
             </div>

             <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">
                     Service Interest *
                 </label>
                 <Select required value={formData.service} onValueChange={(value: string) => handleInputChange('service', value)}>
                     <SelectTrigger className="w-full">
                         <SelectValue placeholder="Select a service" />
                     </SelectTrigger>
                     <SelectContent>
                         <SelectItem value="staffing-temp">Temporary Staffing</SelectItem>
                         <SelectItem value="staffing-perm">Permanent Recruitment</SelectItem>
                         <SelectItem value="staffing-hr">HR Consultancy</SelectItem>
                         <SelectItem value="cleaning-residential">Residential Cleaning</SelectItem>
                         <SelectItem value="cleaning-commercial">Commercial Cleaning</SelectItem>
                         <SelectItem value="cleaning-specialized">Specialized Cleaning</SelectItem>
                         <SelectItem value="both">Both Services</SelectItem>
                     </SelectContent>
                 </Select>
             </div>

             <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">
                     Message *
                 </label>
                 <Textarea
                     required
                     value={formData.message}
                     onChange={(e) => handleInputChange('message', e.target.value)}
                     placeholder="Tell us about your needs..."
                     rows={4}
                     className="w-full"
                 />
             </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <section id="contact" className="relative py-16 lg:py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Ready to discuss your staffing needs or cleaning requirements? We are here to help with a free, no-obligation consultation.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border">
                  {renderFormContent()}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}