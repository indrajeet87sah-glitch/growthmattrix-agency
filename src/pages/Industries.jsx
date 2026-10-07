import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Laptop, Building2, Stethoscope, Home, Zap } from 'lucide-react';

const Industries = () => {
    const industriesList = [
        {
            icon: <ShoppingBag className="w-7 h-7 text-[#22c55e]" />,
            title: "E-Commerce & D2C Brands",
            description: "Scale online store revenue with high-ROAS Meta and Google Shopping ads, email automation, and conversion-optimized Shopify/WooCommerce stores.",
            metrics: "Average 3.8x ROAS"
        },
        {
            icon: <Laptop className="w-7 h-7 text-[#22c55e]" />,
            title: "B2B SaaS & Tech Startups",
            description: "Drive qualified demo bookings and lower customer acquisition costs (CAC) through LinkedIn ABM campaigns and high-intent SEO funnels.",
            metrics: "45% Lower CAC"
        },
        {
            icon: <Building2 className="w-7 h-7 text-[#22c55e]" />,
            title: "Professional & Financial Services",
            description: "Build authority and generate high-ticket client inquiries for legal, financial, consulting, and corporate service agencies.",
            metrics: "2.5x Pipeline Value"
        },
        {
            icon: <Stethoscope className="w-7 h-7 text-[#22c55e]" />,
            title: "Healthcare & Wellness",
            description: "Compliant, patient-focused digital marketing and appointment generation systems designed for clinics, medical brands, and wellness providers.",
            metrics: "HIPAA-Compliant"
        },
        {
            icon: <Home className="w-7 h-7 text-[#22c55e]" />,
            title: "Real Estate & Construction",
            description: "Generate high-intent buyer and investor leads with geo-targeted lead generation funnels and stunning property showcase pages.",
            metrics: "3x More Inquiries"
        },
        {
            icon: <Zap className="w-7 h-7 text-[#22c55e]" />,
            title: "Local & Multi-Location Agencies",
            description: "Dominate local search results and Google Map packs with automated local SEO frameworks and reputation management systems.",
            metrics: "Top 3 Map Rankings"
        }
    ];

    return (
        <div className="w-full">
            
            {/* Industries Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            MULTIPLE NICHES. ONE RELIABLE PARTNER.
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[850px]">
                        Tailored Fulfillment Across Diverse Industry Verticals.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-[640px]">
                        Every industry has its own buyer psychology and compliance rules. Our specialized execution teams bring deep vertical expertise to every campaign we handle for your agency.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            to="/book-call" 
                            className="inline-flex items-center justify-center px-7 py-4 bg-[#22c55e] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                        >
                            Book a Free Consultation
                            <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link 
                            to="/services" 
                            className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-sm"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[40px] font-extrabold text-black tracking-tight mb-4">
                            Sectors We Specialize In
                        </h2>
                        <p className="text-gray-600 text-[16px] max-w-[560px] mx-auto">
                            Proven frameworks and workflows engineered to deliver maximum ROI in competitive markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industriesList.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl border border-gray-200/80 p-8 flex flex-col justify-between hover:border-green-400 hover:shadow-[0_12px_30px_rgba(34,197,94,0.08)] transition-all duration-300 group"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-[#22c55e] group-hover:text-white transition-colors">
                                        <div className="group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-2">
                                    <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                                        {item.metrics}
                                    </span>
                                    <Link 
                                        to="/book-call" 
                                        className="text-[14px] font-bold text-gray-900 hover:text-green-600 transition-colors flex items-center gap-1.5 group/link shrink-0"
                                    >
                                        <span>Scale Niche</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Industries;