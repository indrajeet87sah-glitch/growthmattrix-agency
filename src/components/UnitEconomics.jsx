import React from 'react';
import { unitEconomicsData } from '../data/unitEconomicsData.jsx';

const UnitEconomics = () => {
    return (
        <section className="w-full bg-[#f2f6f5] py-20">

            {/* SVG Linear Gradient Definition */}
            <svg width="0" height="0" className="absolute hidden">
                <defs>
                    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="gm-container">
                <div className="mx-auto px-4 sm:px-0 lg:px-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                        {/* Left Side: Content */}
                        <div className="w-full lg:w-[55%] flex items-stretch">
                            <div className="w-[3px] bg-[#34a853] shrink-0 mr-6 self-stretch rounded-full"></div>

                            <div className="flex flex-col justify-center py-1">
                                <p className="text-[18px] font-400 text-gray-600 uppercase mb-2">
                                    WE OPTIMISE MORE THAN JUST ROAS
                                </p>
                                <h2 className="text-3xl md:text-[42px] font-bold text-black leading-tight tracking-tight mb-4">
                                    We Focus On Unit Economics.
                                </h2>
                                <p className="text-[17px] font-medium text-gray-600 mb-2.5">
                                    ROAS Looks Good On Ads Manager. Profit Grows Businesses.
                                </p>
                                <p className="text-[16px] text-gray-500 leading-relaxed max-w-[92%] mb-8">
                                    We Help You Optimise CAC, AOV, LTV And Contribution Profit — So Your Clients Build Sustainable, Long-Term Growth.
                                </p>

                                <a href="#" className="inline-flex items-center justify-between w-fit px-6 py-3 bg-white border border-gray-300/80 rounded-xl text-[14px] font-semibold text-gray-900 hover:border-green-500 hover:text-green-600 transition-all duration-300 shadow-sm group">
                                    Learn How We Optimise Unit Economics
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.2}
                                        stroke="currentColor"
                                        className="w-4 h-4 ml-3 text-[#22c55e] group-hover:translate-x-1.5 transition-transform duration-300"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: 4 Small Cards Grid (Mapped from Data) */}
                        <div className="w-full lg:w-[42%]">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {unitEconomicsData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-4 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300"
                                    >
                                        <div className="mb-2.5 h-12 w-12 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        {/* leading-tight add kiya hai taaki multi-line heading proper dikhe */}
                                        <h3 className="text-[16px] font-bold text-gray-900 mb-1 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[12px] text-gray-500 leading-snug">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnitEconomics;