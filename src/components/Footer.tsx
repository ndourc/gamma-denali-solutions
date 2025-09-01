export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white text-center p-6">
      <div className="container mx-auto">
        <p>&copy; 2025 Your Business Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};