import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/servicesData.jsx';

const Services = () => {
    return (
        <section className="mx-auto px-4 py-16 sm:px-6 lg:px-8 font-sans bg-[#fafafa]"> {/* Halka gray bg taaki white cards alag dikhein */}
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
                                <p className="text-[18px] font-semibold text-gray-700 uppercase tracking-[0.1em] mb-1.5">
                                    OUR WHITE-LABEL SERVICES
                                </p>
                                <h2 className="text-3xl md:text-[42px] font-bold text-black leading-tight tracking-tight">
                                    End-To-End Support For Your Agency
                                </h2>
                            </div>
                        </div>

                        {/* Right Side Link (Vertically centered) */}
                        <div className="shrink-0">
                            <a href="#" className="text-[#22c55e] text-[18px] font-bold hover:text-green-600 flex items-center gap-1 transition-colors">
                                View All Services
                                <span className="text-xl font-normal ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Paragraph */}
                    <div className="mt-4 max-w-[850px]">
                        <p className="text-[17px] text-gray-500 leading-relaxed">
                            Plug Into Our Expert Team And Deliver World-Class Results For Your Clients — Under Your Brand.
                        </p>
                    </div>
                </div>

                {/* 5-Column Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;