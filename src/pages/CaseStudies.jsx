import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Award, CheckCircle2, BarChart2 } from 'lucide-react';

const CaseStudies = () => {
    const caseStudiesList = [
        {
            tag: "E-Commerce & D2C Growth",
            title: "Scaling a Premium Skincare Brand from $50k to $250k/Month in 90 Days",
            client: "Aura Botanicals (UK)",
            metrics: "+380% Revenue Growth",
            description: "Restructured full-funnel Meta and Google Shopping campaigns, implemented server-side tracking (GA4), and optimized high-conversion landing page variants.",
            results: ["3.8x Blended ROAS", "45% Lower Customer Acquisition Cost", "2.1x Increase in Repeat Purchase Rate"]
        },
        {
            tag: "B2B SaaS Lead Generation",
            title: "Generating 120+ Qualified Enterprise Demo Bookings Monthly for HR Tech",
            client: "WorkScale Systems (US)",
            metrics: "45% Reduction in CPL",
            description: "Executed a targeted LinkedIn ABM outbound strategy combined with high-intent Google Search ads and automated HubSpot lead scoring workflows.",
            results: ["120+ Qualified Demos/Month", "Enterprise Deal Size Increased by 35%", "Sales Pipeline Value Exceeded $1.2M"]
        },
        {
            tag: "White-League Agency Fulfillment",
            title: "Helping a Digital Marketing Agency Expand Service Offerings Without Hiring Overhead",
            client: "Apex Growth Partners (AU)",
            metrics: "100% On-Time Delivery",
            description: "Took over complete white-label PPC and technical SEO execution for 14 retainer clients, allowing the agency founder to focus exclusively on sales.",
            results: ["Added $45k/Month in Agency Retainers", "Zero Client Churn During Transition", "Seamless Slack & Zoom Integration"]
        }
    ];

    return (
        <div className="w-full">
            
            {/* Case Studies Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            PROVEN TRACK RECORD. REAL RESULTS.
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[850px]">
                        How We Drive Predictable Growth For Our Agency Partners.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-[640px]">
                        Explore detailed case studies showcasing how our white-label execution engine scales revenue, lowers acquisition costs, and expands delivery margins.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            to="/book-call" 
                            className="inline-flex items-center justify-center px-7 py-4 bg-[#22c55e] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                        >
                            Partner With Us
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

            {/* Case Studies List Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="space-y-12">
                        {caseStudiesList.map((study, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-3xl border border-gray-200/80 p-8 md:p-12 hover:border-green-400 hover:shadow-[0_15px_40px_rgba(34,197,94,0.06)] transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start justify-between"
                            >
                                <div className="w-full lg:w-[62%]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[12px] font-bold text-[#22c55e] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                                            {study.tag}
                                        </span>
                                        <span className="text-[13px] font-medium text-gray-500">
                                            Client: <strong className="text-gray-800">{study.client}</strong>
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 leading-snug">
                                        {study.title}
                                    </h2>

                                    <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
                                        {study.description}
                                    </p>

                                    <div className="space-y-2 mb-8">
                                        {study.results.map((res, rIdx) => (
                                            <div key={rIdx} className="flex items-center gap-2.5 text-[14.5px] font-medium text-gray-800">
                                                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                                                <span>{res}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link 
                                        to="/book-call" 
                                        className="inline-flex items-center gap-2 text-[15px] font-bold text-gray-900 hover:text-green-600 transition-colors group/link"
                                    >
                                        <span>Request Similar Growth Strategy</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>

                                <div className="w-full lg:w-[32%] bg-[#0c1b17] rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/30 flex items-center justify-center mb-6 text-[#22c55e]">
                                            <BarChart2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-1">Key Milestone</span>
                                        <h3 className="text-2xl font-extrabold text-[#22c55e] mb-4">{study.metrics}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed">Delivered transparently under white-label execution standards.</p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-semibold">
                                        <span>GrowthMattrix Engine</span>
                                        <span>Verified Results</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CaseStudies;