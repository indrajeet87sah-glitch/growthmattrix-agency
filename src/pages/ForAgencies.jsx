import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ForAgencies = () => {
    return (
        <div className="w-full">
            {/* For Agencies Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden">
                <div className="gm-container flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Content */}
                    <div className="w-full md:w-[55%] flex flex-col items-start text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[3px] bg-[#34a853] shrink-0 self-stretch rounded-full"></div>
                            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                                BUILT EXCLUSIVELY FOR AGENCIES
                            </p>
                        </div>
                        
                        <h1 className="text-4xl md:text-[52px] font-extrabold text-black leading-tight tracking-tight mb-6">
                            Scale Your Agency Delivery Without Adding Overhead.
                        </h1>
                        
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 max-w-[580px]">
                            Partner With Us As Your White-Label Fulfillment Engine. We Handle The Complex PPC, SEO, And Dev Execution While You Scale Client Acquisition And Profits.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link 
                                to="/book-call" 
                                className="inline-flex items-center justify-center px-7 py-4 bg-[#22c55e] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                            >
                                Become An Agency Partner
                                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link 
                                to="/services" 
                                className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-sm"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual Box */}
                    <div className="w-full md:w-[42%] flex justify-center">
                        <div className="w-full h-[360px] md:h-[420px] bg-gradient-to-tr from-gray-900 to-[#0c1b17] rounded-3xl shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 bg-[#22c55e]/20 border border-[#22c55e]/40 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#22c55e]">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">White-Label Excellence</h3>
                                <p className="text-gray-400 text-sm max-w-[280px]">Seamless integration with your team and brand guidelines.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ForAgencies;