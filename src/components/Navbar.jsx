import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/gm-logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Scroll detect karke 100px ke baad sticky slide-down trigger karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Menu Array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'For Agencies', path: '/for-agencies' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      {/* 1. Normal Header (Page ke sath scroll hoke upar chala jayega) */}
      <header className="w-full py-2 bg-white border-b border-gray-100">
        <div className="gm-container h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <img
                src={logo}
                alt="GrowthMattrix Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Menu Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-[#10B981] py-1 ${
                    isActive
                      ? 'text-[#10B981] border-b-2 border-[#10B981]'
                      : 'text-gray-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/login"
              className="text-base rounded-lg px-4 py-3 border border-gray-300 text-black hover:text-[#10B981] hover:border-[#10B981] transition"
            >
              Login
            </Link>
            <Link
              to="/book-call"
              className="bg-[#0DAC5A] hover:bg-[#059669] text-white text-base px-4 py-4 rounded-lg flex items-center gap-1.5 transition shadow-sm"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* 2. Sticky Header (100px cross hone par smooth slide-down hoke aayega) */}
      <header
        className={`fixed top-0 left-0 w-full z-40 py-2 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 transition-all duration-300 ease-in-out transform ${
          isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="gm-container h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <img
                src={logo}
                alt="GrowthMattrix Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Menu Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-[#10B981] py-1 text-sm ${
                    isActive
                      ? 'text-[#10B981] border-b-2 border-[#10B981]'
                      : 'text-gray-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm rounded-lg px-3 py-2 border border-gray-300 text-black hover:text-[#10B981] hover:border-[#10B981] transition"
            >
              Login
            </Link>
            <Link
              to="/book-call"
              className="bg-[#0DAC5A] hover:bg-[#059669] text-white text-sm px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition shadow-sm"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* 3. Mobile Dark Backdrop Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* 4. Mobile Slide-In Sidebar Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="h-20 px-5 flex items-center justify-between border-b border-gray-100">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src={logo}
                alt="GrowthMattrix Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-[#10B981]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#10B981]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-5 border-t border-gray-100 space-y-3 bg-gray-50">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:border-[#10B981] transition block"
          >
            Login
          </Link>
          <Link
            to="/book-call"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-base font-semibold py-3 px-4 rounded-md shadow-sm flex items-center justify-center gap-1.5 transition"
          >
            Partner With Us <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;