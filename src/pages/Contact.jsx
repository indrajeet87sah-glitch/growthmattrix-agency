import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full bg-white">
            
            {/* Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 border-b border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="gm-container flex flex-col items-center text-center relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            GET IN TOUCH WITH OUR TEAM
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[800px]">
                        Let's Talk About Your Agency Scaling & Fulfillment.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed max-w-[620px]">
                        Have questions about our white-label models, custom retainers, or partnership structures? Our executive team is here to assist you 24/7.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Left Column - Contact Cards & Info */}
                        <div className="lg:col-span-5 space-y-6">
                            
                            {/* Card 1: Email */}
                            <div className="bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#22c55e] shrink-0 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Direct Email</span>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">support@growthmattrix.com</h4>
                                        <p className="text-sm text-gray-500">We respond within 2-4 hours.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Phone */}
                            <div className="bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#22c55e] shrink-0 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Call Our Office</span>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">+1 (555) 234-5678</h4>
                                        <p className="text-sm text-gray-500">Mon - Fri from 9am to 6pm GMT.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Location */}
                            <div className="bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#22c55e] shrink-0 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Global HQ</span>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Covent Garden, London, UK</h4>
                                        <p className="text-sm text-gray-500">Serving UK, US, CA, AU & UAE agencies.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dark Support Box */}
                            <div className="bg-[#0c1b17] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl"></div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="w-5 h-5 text-[#22c55e]" />
                                    <h4 className="text-lg font-bold">24/7 Slack & Zoom Sync</h4>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Partner agencies receive dedicated private Slack channels for real-time communication and daily sprint updates.
                                </p>
                                <span className="text-xs text-[#22c55e] font-bold tracking-wider uppercase">Enterprise SLA Enabled</span>
                            </div>

                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="lg:col-span-7 bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 md:p-12 shadow-xl">
                            {submitted ? (
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 bg-emerald-100 text-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Message Dispatched!</h3>
                                    <p className="text-gray-600 max-w-[420px] mx-auto mb-8 text-[16px] leading-relaxed">
                                        Thank you for reaching out. Our partnership executive will review your inquiry and get back to you within 24 hours.
                                    </p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-4 bg-[#22c55e] text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Direct Message</h3>
                                        <p className="text-gray-600 text-sm">Fill in your details and our team will connect with you.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name</label>
                                            <input 
                                                type="text" 
                                                required 
                                                placeholder="e.g. John Doe" 
                                                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email Address</label>
                                            <input 
                                                type="email" 
                                                required 
                                                placeholder="john@agency.com" 
                                                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Agency Name & Subject</label>
                                        <input 
                                            type="text" 
                                            required 
                                            placeholder="e.g. Apex Media - White-label PPC partnership" 
                                            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                        <textarea 
                                            rows="5" 
                                            required 
                                            placeholder="Tell us about your agency fulfillment needs or questions..." 
                                            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full py-4 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-[15px] group"
                                    >
                                        <span>Send Inquiry Message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* Full-Width Google Map Section */}
            <section className="w-full pb-0">
                <div className="w-full h-[480px] bg-gray-100 shadow-inner">
                    <iframe 
                        title="GrowthMattrix Office Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2987178351614!2d-0.12466092348281358!3d51.51307617181475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cc94966779%3A0xc39f992a7e78d21b!2sShelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </div>
    );
};

export default Contact;