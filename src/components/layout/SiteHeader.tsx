import { useState } from 'react';
import logo from '../../assets/Logo.svg';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav className="site-header container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 gap-4">
        {/* Logo section */}
        <a href="#home" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-9 lg:h-10 w-auto max-w-full object-contain"
          />
        </a>

        {/* Desktop navlink section */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-700">
          <a href="#home" className="whitespace-nowrap hover:text-orange-500 transition">Home</a>
          <a href="#team" className="whitespace-nowrap hover:text-orange-500 transition">About Us</a>
          <a href="#services" className="whitespace-nowrap hover:text-orange-500 transition">Our App</a>
          <a href="#newsletter" className="whitespace-nowrap hover:text-orange-500 transition">Contacts</a>
         
        </div>

        {/* Desktop nav button section  */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <a
            href="/login"
            className="whitespace-nowrap px-4 py-2 font-medium text-gray-700 hover:text-orange-500 transition"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="whitespace-nowrap px-5 py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Sign up
          </a>
        </div>


        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile & Tablet dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 shadow-lg container mx-auto">
          <div className="flex flex-col gap-4 font-medium text-gray-700 text-center">
            <a href="#home" onClick={closeMenu} className="hover:text-orange-500 transition ">Home</a>
            <a href="#team" onClick={closeMenu} className="hover:text-orange-500 transition">About Us</a>
            <a href="#services" onClick={closeMenu} className="hover:text-orange-500 transition">Our App</a>
            <a href="#newsletter" onClick={closeMenu} className="hover:text-orange-500 transition">Contacts</a>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="/login"
              onClick={closeMenu}
              className="w-full text-center py-2.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Log in
            </a>
            <a
              href="/signup"
              onClick={closeMenu}
              className="w-full text-center py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;