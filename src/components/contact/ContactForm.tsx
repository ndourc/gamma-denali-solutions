// "use client"

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Send, CheckCircle } from 'lucide-react';

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="bg-white rounded-2xl p-8 shadow-sm border">
//       <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
      
//       {isSubmitted ? (
//         <div className="text-center py-8">
//           <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//           <h4 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h4>
//           <p className="text-slate-600">We will get back to you within 24 hours.</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Full Name *
//               </label>
//               <Input
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 placeholder="Your name"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Email Address *
//               </label>
//               <Input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 placeholder="your@email.com"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Phone Number
//             </label>
//             <Input
//               type="tel"
//               value={formData.phone}
//               onChange={(e) => handleInputChange('phone', e.target.value)}
//               placeholder="+44 742 821 2756"
//               className="w-full"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Service Interest *
//             </label>
//             <Select value={formData.service} onValueChange={(value: string) => handleInputChange('service', value)}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a service" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="staffing-temp">Temporary Staffing</SelectItem>
//                 <SelectItem value="staffing-perm">Permanent Recruitment</SelectItem>
//                 <SelectItem value="staffing-hr">HR Consultancy</SelectItem>
//                 <SelectItem value="cleaning-residential">Residential Cleaning</SelectItem>
//                 <SelectItem value="cleaning-commercial">Commercial Cleaning</SelectItem>
//                 <SelectItem value="cleaning-specialized">Specialized Cleaning</SelectItem>
//                 <SelectItem value="both">Both Services</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Message *
//             </label>
//             <Textarea
//               required
//               value={formData.message}
//               onChange={(e) => handleInputChange('message', e.target.value)}
//               placeholder="Tell us about your needs..."
//               rows={4}
//               className="w-full"
//             />
//           </div>

//           <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//             <Send className="w-5 h-5 mr-2" />
//             Send Message
//           </Button>
//         </form>
//       )}
//     </div>
//   );
// }