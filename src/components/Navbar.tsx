import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/white_logo_transparent.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const leftNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
  ];

  const rightNavLinks = [
    { to: '/stylists', label: 'Our Team' },
    { to: '/careers', label: 'Careers' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-blush-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Layout with Logo */}
        <div className="hidden md:flex items-center justify-between py-10 relative">
          {/* Left Navigation - All Tabs */}
          <nav className="flex items-center space-x-8">
            {allNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide uppercase transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'text-blush-pink border-b-2 border-blush-pink pb-1'
                    : 'text-blush-dark hover:text-blush-pink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo Circle - centered on home, right side on other pages */}
          <Link
            to="/"
            className={`absolute top-2 ${
              location.pathname === '/'
                ? 'left-1/2 -translate-x-1/2'
                : 'right-8'
            }`}
          >
            <div
              className="w-44 h-44 rounded-full bg-blush-pink flex items-center justify-center border-4 border-white"
              style={{ boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.25)' }}
            >
              <img
                src={logoImg}
                alt="Blush Hair & Spa"
                className="w-32 h-auto"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-blush-grey/20 py-4">
            <nav className="flex flex-col space-y-4 items-center">
              {allNavLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm tracking-wide uppercase py-2 transition-all duration-200 ${
                    isActive(link.to) ? 'text-blush-pink' : 'text-blush-dark'
                  } ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
