import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
    const coreValues = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-[#22c55e]" />,
            title: "100% White-Label Integrity",
            description: "We operate strictly behind the scenes. Your clients are yours, your brand is yours, and our execution remains completely invisible."
        },
        {
            icon: <Target className="w-6 h-6 text-[#22c55e]" />,
            title: "Relentless ROI Focus",
            description: "We don't just chase vanity metrics; we engineer campaigns focused strictly on lower CAC, higher ROAS, and scalable unit economics."
        },
        {
            icon: <Users className="w-6 h-6 text-[#22c55e]" />,
            title: "True Extension of Your Team",
            description: "Our media buyers, developers, and strategists integrate directly into your Slack, Zoom, and daily workflows."
        },
        {
            icon: <Globe className="w-6 h-6 text-[#22c55e]" />,
            title: "Global Agency Experience",
            description: "Trusted by ambitious agencies across the UK, US, Canada, Australia, and the UAE to handle complex digital execution."
        }
    ];

    return (
        <div className="w-full">
            
            {/* About Hero Section with Professional Visual Image */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                                WHO WE ARE
                            </p>
                        </div>
                        
                        <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6">
                            Powering Agency Growth Without The Hiring Overhead.
                        </h1>
                        
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 max-w-[580px]">
                            GrowthMattrix is engineered to be the ultimate white-label fulfillment partner for digital agencies worldwide, turning delivery constraints into unlimited scalability.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Link 
                                to="/book-call" 
                                className="inline-flex items-center justify-center px-7 py-4 bg-[#22c55e] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                            >
                                Partner With Us
                                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-[14px] text-gray-600 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                                <span>100% Confidential</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                                <span>Global Execution</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Image Box */}
                    <div className="w-full lg:w-[42%]">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#0c1b17] group">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                                alt="GrowthMattrix Team Collaboration" 
                                className="w-full h-[380px] md:h-[440px] object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <span className="text-xs uppercase tracking-widest text-[#22c55e] font-bold">Dedicated Execution</span>
                                    <h4 className="text-xl font-bold mt-1">Built For Agency Scale</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Core Values Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[40px] font-extrabold text-black tracking-tight mb-4">
                            Built By Agency Owners, For Agency Owners
                        </h2>
                        <p className="text-gray-600 text-[16px] max-w-[580px] mx-auto">
                            We understand the friction of scaling client delivery, hiring bottlenecks, and margin compression. Here is how we solve it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreValues.map((val, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl border border-gray-200/80 p-8 flex flex-col justify-between hover:border-green-400 hover:shadow-xl transition-all duration-300"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {val.title}
                                    </h3>
                                    <p className="text-[15px] text-gray-600 leading-relaxed">
                                        {val.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;