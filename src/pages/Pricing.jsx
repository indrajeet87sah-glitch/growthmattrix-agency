import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
    const pricingPlans = [
        {
            name: "Starter Fulfillment",
            price: "$1,999",
            period: "/month",
            description: "Ideal for boutique agencies looking to offload single-channel execution and boost delivery bandwidth.",
            features: [
                "Single Channel Focus (PPC or SEO)",
                "Up to $10k Ad Spend Managed",
                "Weekly Performance Reports",
                "Dedicated Account Manager",
                "Slack & Email Support"
            ],
            popular: false,
            btnText: "Get Started",
            btnClass: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
        },
        {
            name: "Growth Engine",
            price: "$3,999",
            period: "/month",
            description: "Our most popular tier for ambitious agencies scaling multiple client accounts with complex fulfillment needs.",
            features: [
                "Multi-Channel Execution (PPC, SEO, Meta)",
                "Up to $35k Ad Spend Managed",
                "Custom Landing Page Design & CRO",
                "Daily Slack Channel Integration",
                "Bi-Weekly Strategy & Client Calls",
                "100% White-Label Reports"
            ],
            popular: true,
            btnText: "Scale Your Agency",
            btnClass: "bg-[#22c55e] hover:bg-green-600 text-white shadow-lg"
        },
        {
            name: "Enterprise Partner",
            price: "Custom",
            period: "tailored",
            description: "Full-scale white-label operations for established agencies needing dedicated remote teams and custom development.",
            features: [
                "Unlimited Execution Channels",
                "Dedicated Full-Time Developers & Media Buyers",
                "Custom Web App & Landing Page Dev",
                "Direct Zoom & Client Management Support",
                "Custom SLA & Priority Turnaround",
                "Revenue & Margin Optimization Consulting"
            ],
            popular: false,
            btnText: "Contact Enterprise Team",
            btnClass: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
        }
    ];

    return (
        <div className="w-full">
            
            {/* Pricing Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            TRANSPARENT PRICING. PREDICTABLE MARGINS.
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[850px]">
                        Flexible Retainer Models Designed For Agency Growth.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-[640px]">
                        No hidden fees or long-term lock-ins. Choose a white-label fulfillment plan that fits your agency's scale and profit targets.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            to="/book-call" 
                            className="inline-flex items-center justify-center px-7 py-4 bg-[#22c55e] hover:bg-green-600 text-white text-[15px] font-semibold rounded-xl shadow-lg transition-all duration-300 group"
                        >
                            Book a Consultation
                            <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Cards Section with proper top padding for absolute badge */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
                        {pricingPlans.map((plan, index) => (
                            <div 
                                key={index}
                                className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                                    plan.popular 
                                        ? 'bg-[#0c1b17] text-white shadow-2xl border-2 border-[#22c55e] lg:-translate-y-4' 
                                        : 'bg-white text-gray-900 border border-gray-200/80 hover:border-green-400 hover:shadow-xl'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-10">
                                        Most Popular For Scaling Agencies
                                    </div>
                                )}

                                <div>
                                    <h3 className={`text-2xl font-bold mb-3 leading-snug ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-[15px] mb-8 leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {plan.description}
                                    </p>

                                    <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-gray-200/20">
                                        <span className="text-4xl md:text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                        <span className={`text-sm font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-[14.5px] leading-relaxed">
                                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#22c55e]" />
                                                <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link 
                                    to="/book-call" 
                                    className={`w-full py-4 rounded-xl text-center font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 group mt-auto ${plan.btnClass}`}
                                >
                                    <span>{plan.btnText}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Pricing;