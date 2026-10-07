import React from 'react';
import { processData } from '../data/processData.jsx';

const Process = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="gm-container">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex gap-4">
                        {/* Vertical Green Accent Line */}
                        <div className="w-[5px] bg-[#34a853] shrink-0 self-stretch rounded-full"></div>

                        <div className="flex flex-col justify-center">
                            <p className="text-[18px] font-400 text-gray-600 uppercase mb-1.5">
                                HOW IT WORKS
                            </p>
                            <h2 className="text-3xl md:text-[42px] font-bold text-black leading-tight tracking-tight">
                                A Simple, Seamless Process
                            </h2>
                        </div>
                    </div>

                    <div className="mt-3 pl-4">
                        <p className="text-[16px] text-gray-500">
                            Get Started Quickly. No Hassle. No Long Contracts.
                        </p>
                    </div>
                </div>

                {/* Steps Grid Layout with Arrows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-start">
                    {processData.map((item, index) => (
                        <div key={item.id} className="flex flex-col items-center text-center relative group">
                            
                            {/* Step Number Circle Badge */}
                            <div className="w-14 h-14 rounded-full bg-[#eaf6ec] border border-[#d1ebd4] flex items-center justify-center text-[#22c55e] font-bold text-[16px] mb-6 shadow-sm">
                                {item.step}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-[20px] font-bold text-gray-900 mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-[16px] font-light text-gray-500 leading-relaxed max-w-[260px]">
                                {item.description}
                            </p>

                            {/* Arrow between steps (Visible on desktop for items except the last one) */}
                            {index < processData.length - 1 && (
                                <div className="hidden lg:flex absolute top-7 -right-6 z-10 text-[#22c55e]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;