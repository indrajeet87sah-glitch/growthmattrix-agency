import React from 'react';
import IndustryCard from './IndustryCard';
import { industriesData } from '../data/industriesData';
import andMore from '../assets/andMore.png';

const Industries = () => {
    return (
        <section className="mx-auto px-4 py-16 pt-10 sm:px-6 lg:px-8 font-sans">
            <div className="gm-container">

                {/* Header Section */}
                <div className="mb-12">
                    {/* Top Row: Headings and Link Button */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Left Side: Green Line and Titles */}
                        <div className="flex gap-4">
                            {/* Green Line (Sirf Heading ke height tak) */}
                            <div className="w-[3px] bg-[#34a853] shrink-0"></div>

                            <div className="flex flex-col justify-center">
                                <p className="text-[18px] font-medium text-gray-900 uppercase tracking-wide mb-1.5">
                                    Industries We Support
                                </p>
                                <h2 className="text-3xl md:text-[42px] font-bold text-black leading-tight tracking-tight">
                                    Multiple Niches. One Reliable Partner.
                                </h2>
                            </div>
                        </div>

                        {/* Right Side Link (Now vertically centered) */}
                        <div className="shrink-0">
                            <a href="#" className="text-[#22c55e] text-[18px] font-bold hover:text-green-600 flex items-center gap-1 transition-colors">
                                View All Industries
                                <span className="text-lg font-normal ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Paragraph */}
                    <div className="mt-4 max-w-[750px]">
                        <p className="text-[16px] text-gray-500 leading-relaxed max-w-3xl">
                            We Help Marketing Agencies Run And Scale Client Campaigns Across High-Growth E-Commerce And Service Industries.
                        </p>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Render pehle 8 items normally */}
                    {industriesData.slice(0, 8).map((industry) => (
                        <IndustryCard
                            key={industry.id}
                            {...industry}
                        />
                    ))}

                    {/* 9th Item - Normal Width, Center Aligned (Column 2 se start) */}
                    <div className="lg:col-start-2">
                        <IndustryCard
                            key={industriesData[8].id}
                            {...industriesData[8]}
                        />
                    </div>

                    {/* 10th Item ('And More') - Normal Width, Column 3 mein aayega */}
                    <div className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[220px] bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-gray-50">
                        <div>
                            <img src={andMore} alt="And More" className="w-16 h-16 object-contain" />
                        </div>
                        <h3 className="text-[24px] font-bold text-[#111] mb-1 mt-5">And More</h3>
                        <p className="text-[16px] text-[#999]">We Support Custom Niches Too.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Industries;