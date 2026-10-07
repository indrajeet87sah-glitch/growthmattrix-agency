import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="w-full py-20 bg-white">
            <div className="gm-container">
                
                {/* Header */}
                <div className="mb-12 border-b border-gray-100 pb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            LEGAL & AGREEMENT
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-[46px] font-extrabold text-gray-900 tracking-tight mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Last updated: October 7, 2026
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-[16px] text-gray-700 leading-relaxed">
                    
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-[#22c55e]" />
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing our website or partnering with GrowthMattrix for white-label digital execution services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services or partner platforms.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-[#22c55e]" />
                            2. White-Label Retainer & Service Delivery
                        </h2>
                        <p>
                            GrowthMattrix provides contracted white-label fulfillment services (including PPC, SEO, web development, and dedicated teams) exclusively to digital agencies. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>All deliverables are produced under strict white-label confidentiality standards.</li>
                            <li>Retainer plans operate on a monthly recurring basis with transparent scope agreements.</li>
                            <li>Project timelines and deliverables are governed by mutually agreed service level agreements (SLAs).</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <ShieldAlert className="w-6 h-6 text-[#22c55e]" />
                            3. Intellectual Property & Client Ownership
                        </h2>
                        <p>
                            Partner agencies and their end-clients retain 100% intellectual property ownership of all custom design assets, codebases, campaign configurations, and advertising data created during the fulfillment process upon full payment of applicable retainers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-[#22c55e]" />
                            4. Limitation of Liability
                        </h2>
                        <p>
                            GrowthMattrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from third-party platform policy changes (such as unexpected ad account suspensions by Meta or Google) beyond our direct operational control.
                        </p>
                    </section>

                    <section className="space-y-3 pt-6 border-t border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900">Need Custom Agency SLAs?</h3>
                        <p className="text-gray-600">
                            We offer custom enterprise agreements and master service agreements (MSAs) for established agencies.
                        </p>
                        <div className="pt-4">
                            <Link 
                                to="/book-call" 
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-md"
                            >
                                <span>Discuss Custom SLA</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default TermsConditions;