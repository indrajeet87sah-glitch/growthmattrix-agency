import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Search, Code, BarChart3, Users, ShieldCheck } from 'lucide-react';

const Services = () => {
    const serviceList = [
        {
            icon: <TrendingUp className="w-7 h-7 text-[#22c55e]" />,
            title: "PPC & Paid Media Management",
            description: "High-performance Google Ads, Meta Ads, and LinkedIn campaigns engineered to drive lower CPA and higher ROAS for your clients.",
            features: ["Advanced Audience Targeting", "Custom Landing Page Strategy", "Daily Budget Optimization", "Transparent ROI Reporting"]
        },
        {
            icon: <Search className="w-7 h-7 text-[#22c55e]" />,
            title: "SEO & Content Strategy",
            description: "Scale organic visibility with technical SEO audits, high-intent keyword strategies, and authoritative content creation that ranks.",
            features: ["Technical Site Audits", "On-Page & Off-Page SEO", "Authority Link Building", "Data-Driven Content Roadmaps"]
        },
        {
            icon: <Code className="w-7 h-7 text-[#22c55e]" />,
            title: "Web Design & Development",
            description: "Lightning-fast, conversion-optimized websites and web applications built using modern stacks like React, Tailwind CSS, and Webflow.",
            features: ["Custom UI/UX Design", "High-Converting Landing Pages", "Responsive & Mobile-First", "Seamless CMS Integration"]
        },
        {
            icon: <BarChart3 className="w-7 h-7 text-[#22c55e]" />,
            title: "CRO & Analytics Tracking",
            description: "Turn more traffic into revenue with rigorous conversion rate optimization, GA4 server-side tracking, and multi-touch attribution.",
            features: ["GA4 & GTM Setup", "Heatmap & User Behavior Analysis", "A/B Testing Experiments", "Conversion Funnel Audits"]
        },
        {
            icon: <Users className="w-7 h-7 text-[#22c55e]" />,
            title: "Dedicated White-Label Teams",
            description: "Hire vetted remote developers, media buyers, and account managers who work seamlessly under your agency's brand.",
            features: ["Full-Time Dedicated Resources", "Direct Slack/Zoom Communication", "Rigorous Quality Assurance", "Zero Recruitment Overhead"]
        },
        {
            icon: <ShieldCheck className="w-7 h-7 text-[#22c55e]" />,
            title: "Agency Unit Economics Consulting",
            description: "Optimize your pricing models, client retention strategies, and profit margins to scale your agency sustainably.",
            features: ["Retainer Model Restructuring", "Margin & Cost Analysis", "Client LTV Maximization", "Scaling Roadmaps"]
        }
    ];

    return (
        <div className="w-full">
            
            {/* Services Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            OUR FULFILLMENT SERVICES
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[850px]">
                        Enterprise-Grade Execution, Powered For Ambitious Agencies.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-[640px]">
                        Stop turning down projects due to bandwidth constraints. Scale your delivery capacity instantly with our expert white-label fulfillment teams.
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
                            to="/pricing" 
                            className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-sm"
                        >
                            View Pricing Models
                        </Link>
                    </div>
                </div>
            </section>

            {/* Detailed Services Grid Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[40px] font-extrabold text-black tracking-tight mb-4">
                            Everything Your Agency Needs To Scale
                        </h2>
                        <p className="text-gray-600 text-[16px] max-w-[560px] mx-auto">
                            Delivered under your brand, with complete transparency and rigorous quality checks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceList.map((service, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl border border-gray-200/80 p-8 flex flex-col justify-between hover:border-green-400 hover:shadow-[0_12px_30px_rgba(34,197,94,0.08)] transition-all duration-300 group"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:bg-[#22c55e] group-hover:text-white transition-colors">
                                        <div className="group-hover:text-white transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2.5 mb-8 border-t border-gray-100 pt-6">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-2.5 text-[14px] text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link 
                                    to="/book-call" 
                                    className="inline-flex items-center text-[15px] font-bold text-gray-900 hover:text-green-600 transition-colors gap-2 mt-auto group/link"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;