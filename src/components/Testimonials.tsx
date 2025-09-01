export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 p-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        <div className="mt-12 space-y-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">The team provided compassionate and discreet support. I feel so much better in my space.</p>
            <p className="mt-4 font-semibold text-gray-800">- Jane D., Cleaning Client</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">We found our best employee through their staffing solutions. The process was quick and easy.</p>
            <p className="mt-4 font-semibold text-gray-800">- Mark S., Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};