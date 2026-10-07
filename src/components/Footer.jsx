import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gm-logo.webp';

const Footer = () => {
    return (
        <footer className="w-full bg-white pt-16 pb-10 border-t border-gray-100 font-sans">
            <div className="gm-container flex flex-col items-center">
                
                {/* Logo Section */}
                <div className="mb-8 flex flex-col items-center">
                    <Link to="/" className="flex flex-col items-center group">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                {/* Page Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-[16px] font-medium text-gray-700 mb-8">
                    <li><Link to="/" className="hover:text-green-600 transition-colors">Home</Link></li>
                    <li><Link to="/for-agencies" className="hover:text-green-600 transition-colors">For Agencies</Link></li>
                    <li><Link to="/services" className="hover:text-green-600 transition-colors">Services</Link></li>
                    <li><Link to="/industries" className="hover:text-green-600 transition-colors">Industries</Link></li>
                    <li><Link to="/case-studies" className="hover:text-green-600 transition-colors">Case Studies</Link></li>
                    <li><Link to="/pricing" className="hover:text-green-600 transition-colors">Pricing</Link></li>
                    <li><Link to="/about" className="hover:text-green-600 transition-colors">About</Link></li>
                    <li><Link to="/blog" className="hover:text-green-600 transition-colors">Blog</Link></li>
                    <li><Link to="/contact" className="hover:text-green-600 transition-colors">Contact</Link></li>
                </ul>

                {/* Social Media Icons with Correct YouTube Logo */}
                <div className="flex items-center gap-4 mb-12">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-md" aria-label="LinkedIn">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.35a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"/></svg>
                    </a>
                    {/* YouTube (Corrected Icon) */}
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-md" aria-label="YouTube">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-md" aria-label="Instagram">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    {/* X / Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-md" aria-label="X">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[16px] text-gray-500">
                    <div>
                        © 2026 <span className="font-semibold text-gray-800">Growth<span className="text-[#22c55e]">Mattrix</span> Performance Private Limited</span>. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="tracking-widest font-medium text-gray-600">UK US CA AU UAE</span>
                        <span>|</span>
                        <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;