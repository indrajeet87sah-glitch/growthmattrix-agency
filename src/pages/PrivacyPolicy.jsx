import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="w-full py-20 bg-white">
            <div className="gm-container">
                
                {/* Header */}
                <div className="mb-12 border-b border-gray-100 pb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            LEGAL & COMPLIANCE
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-[46px] font-extrabold text-gray-900 tracking-tight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Last updated: October 7, 2026
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-[16px] text-gray-700 leading-relaxed">
                    
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-[#22c55e]" />
                            1. Introduction & Commitment to Confidentiality
                        </h2>
                        <p>
                            At GrowthMattrix ("we", "our", or "us"), we operate as a dedicated white-label fulfillment partner for digital agencies worldwide. We recognize that confidentiality, data security, and privacy are paramount when handling client campaigns, advertising data, and proprietary agency assets. This Privacy Policy outlines how we collect, use, and protect information when you utilize our website and white-label execution services.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Eye className="w-6 h-6 text-[#22c55e]" />
                            2. Information We Collect
                        </h2>
                        <p>
                            We collect information necessary to provide seamless white-label execution services and manage agency accounts:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Agency Account Details:</strong> Name, work email address, agency name, website URL, and billing information.</li>
                            <li><strong>Execution Credentials:</strong> Advertising account access tokens, Google Analytics properties, CRM integrations, and CMS access provided strictly for campaign fulfillment.</li>
                            <li><strong>Communication Data:</strong> Records of correspondence through Slack channels, Zoom meetings, emails, and consultation booking forms.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Lock className="w-6 h-6 text-[#22c55e]" />
                            3. Strict White-Label Confidentiality
                        </h2>
                        <p>
                            All data provided by partner agencies and their end-clients is treated with strict confidentiality. We guarantee that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>We never disclose our white-label relationship to your end-clients.</li>
                            <li>We do not store or utilize proprietary agency strategies, pricing models, or client lists for competitive advantage.</li>
                            <li>All access credentials are encrypted and restricted solely to assigned fulfillment specialists.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-[#22c55e]" />
                            4. Data Security & Compliance
                        </h2>
                        <p>
                            We implement robust technical and organizational security measures—including SSL encryption, role-based access controls, and secure cloud environments—to safeguard your data against unauthorized access, loss, or alteration.
                        </p>
                    </section>

                    <section className="space-y-3 pt-6 border-t border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900">Have Questions Regarding Data Privacy?</h3>
                        <p className="text-gray-600">
                            If you have any questions or require custom NDA agreements for your agency, please reach out to our compliance team.
                        </p>
                        <div className="pt-4">
                            <Link 
                                to="/book-call" 
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-md"
                            >
                                <span>Contact Compliance Team</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;