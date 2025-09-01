export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white p-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">1</div>
            <h3 className="mt-2 text-xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-600">Reach out via phone, email, or WhatsApp to tell us what you need.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">2</div>
            <h3 className="mt-2 text-xl font-semibold">We Assess</h3>
            <p className="mt-2 text-gray-600">We will understand your specific requirements and create a tailored plan.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">3</div>
            <h3 className="mt-2 text-xl font-semibold">We Deliver</h3>
            <p className="mt-2 text-gray-600">We provide the people or services you need, with a focus on quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};