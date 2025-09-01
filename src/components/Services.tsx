export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Staffing */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600">Staffing Solutions</h3>
            <p className="mt-4 text-gray-600">
              A short blurb about your staffing services, like temporary employment, permanent placements, and HR support.
            </p>
          </div>
          {/* Cleaning */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">Specialized Cleaning</h3>
            <p className="mt-4 text-gray-600">
              A compassionate description of your cleaning services, highlighting support for individuals with diverse needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};