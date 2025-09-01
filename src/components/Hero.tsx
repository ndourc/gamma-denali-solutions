export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-blue-500 text-white p-6">
      <h1 className="text-5xl font-bold md:text-6xl">Your Bold Headline Here</h1>
      <p className="mt-4 text-xl max-w-2xl">A subline that explains what you do with a touch of personality and empathy.</p>
      <button className="mt-8 bg-white text-blue-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
        Get in Touch
      </button>
    </section>
  );
};