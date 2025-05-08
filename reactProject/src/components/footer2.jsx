const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Brand & Year */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-lg font-semibold">Sangguniang Kabataan</h1>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
  
          {/* Right side: Navigation Links */}
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };