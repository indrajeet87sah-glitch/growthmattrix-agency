import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calendar, Clock, User, Building, Mail, Briefcase, Users } from 'lucide-react';
import logo from '../assets/gm-logo.webp';

const BookCall = () => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2026-10-10');
    const [selectedTime, setSelectedTime] = useState('10:00 AM');

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:30 AM', 
        '02:00 PM', '03:30 PM', '05:00 PM'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full py-20 bg-white">
            <div className="gm-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Info Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                                SCHEDULE A STRATEGY SESSION
                            </p>
                        </div>
                        
                        <h1 className="text-3xl md:text-[46px] font-extrabold text-black leading-tight tracking-tight mb-6">
                            Let's Discuss How To Scale Your Agency Delivery.
                        </h1>
                        
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
                            Book a free 30-minute consultation with our white-label fulfillment experts. We will analyze your agency bottlenecks, review your pricing models, and map out a custom scaling roadmap.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-700 text-[15px] font-medium">
                                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                                <span>Zero obligation 30-minute strategy call</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 text-[15px] font-medium">
                                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                                <span>Custom white-label pricing & margin analysis</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 text-[15px] font-medium">
                                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                                <span>Direct access to senior execution strategists</span>
                            </div>
                        </div>

                        <div className="bg-[#0c1b17] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl"></div>
                            <h4 className="text-xl font-bold mb-2">Trusted By 50+ Agencies Globally</h4>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">UK, US, Canada, Australia, and UAE agency owners rely on GrowthMattrix for high-performance execution.</p>
                            <div className="flex items-center gap-3 text-xs text-[#22c55e] font-bold tracking-wider uppercase">
                                <span>100% Confidential</span>
                                <span>•</span>
                                <span>Dedicated Team</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-7 bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 md:p-10 shadow-xl">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="flex items-center justify-center mx-auto mb-6">
                                    <img src={logo} alt="" />
                                </div>
                                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Consultation Confirmed!</h3>
                                <p className="text-gray-600 max-w-[420px] mx-auto mb-8 text-[16px] leading-relaxed">
                                    Thank you. We have reserved your strategy session for <strong className="text-gray-900">{selectedDate} at {selectedTime}</strong>. A calendar invite has been dispatched to your email.
                                </p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="px-8 py-4 bg-[#22c55e] text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                                >
                                    Book Another Session
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Select Date & Time</h3>
                                    <p className="text-gray-600 text-sm">Choose your preferred slot for the 30-minute consultation.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Session Date</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                <Calendar className="w-4 h-4" />
                                            </span>
                                            <input 
                                                type="date" 
                                                required
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px] font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Time Slot (IST / GMT)</label>
                                        <select 
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px] font-medium"
                                        >
                                            {timeSlots.map((slot, idx) => (
                                                <option key={idx} value={slot}>{slot}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200/60">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Your Agency Details</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                <User className="w-4 h-4" />
                                            </span>
                                            <input 
                                                type="text" 
                                                required 
                                                placeholder="e.g. John Doe" 
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email Address</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                <Mail className="w-4 h-4" />
                                            </span>
                                            <input 
                                                type="email" 
                                                required 
                                                placeholder="john@agency.com" 
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Agency Name & Website</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                <Building className="w-4 h-4" />
                                            </span>
                                            <input 
                                                type="text" 
                                                required 
                                                placeholder="Apex Media (agency.com)" 
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Agency Size</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                                <Users className="w-4 h-4" />
                                            </span>
                                            <select 
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                            >
                                                <option>1 - 5 Team Members</option>
                                                <option>6 - 20 Team Members</option>
                                                <option>21 - 50 Team Members</option>
                                                <option>50+ Enterprise Agency</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Fulfillment Challenge</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                            <Briefcase className="w-4 h-4" />
                                        </span>
                                        <select 
                                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                        >
                                            <option>Scaling PPC & Paid Media Delivery</option>
                                            <option>Technical SEO & Content Execution</option>
                                            <option>Custom Web Design & Development</option>
                                            <option>Dedicated White-Label Teams</option>
                                            <option>Agency Unit Economics & Margin Optimization</option>
                                        </select>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full py-4 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-[15px] group"
                                >
                                    <span>Confirm Consultation Booking</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookCall;