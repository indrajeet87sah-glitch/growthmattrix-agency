import React from 'react';
import ctaBg from '../assets/cta-bg.webp';

const CTASection = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Mountain Image with proper opacity and styling */}
            <div  className="absolute inset-0  bg-cover bg-center" style={{ backgroundImage: `url(${ctaBg})` }}></div>

            <div className="gm-container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                
                {/* Left Content */}
                <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
                    <p className="text-[18px] font-normal text-green-400 uppercase mb-3">
                        LET'S GROW TOGETHER
                    </p>
                    <h2 className="text-3xl md:text-[42px] font-bold text-white leading-tight tracking-tight mb-4">
                        Ready To Scale Your Agency?
                    </h2>
                    <p className="text-[17px] text-gray-300 leading-relaxed max-w-[520px]">
                        Get A Free Consultation And Discover How We Can Help You Deliver More, Earn Higher Margins And Grow Faster.
                    </p>
                </div>

                {/* Right Action & Trust Badges */}
                <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-center gap-4">
                    {/* Consultation Button */}
                    <a 
                        href="#" 
                        className="inline-flex items-center justify-center px-7 py-3.5 bg-[#059669] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                    >
                        Book a Free Consultation
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.2} 
                            stroke="currentColor" 
                            className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-6 mt-1 text-[15px] text-gray-300">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>No Obligation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>Confidential</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>Agency Focused</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTASection;