import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail, CheckCircle2 } from 'lucide-react';
import logo from '../assets/gm-logo.webp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full py-20 bg-white flex items-center justify-center min-h-[80vh]">
            <div className="gm-container max-w-[580px]">
                <div className="bg-[#fafafa] rounded-3xl border border-gray-200/80 p-8 md:p-10 shadow-xl">
                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="flex items-center justify-center mx-auto mb-6">
                                <img src={logo} alt="" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h3>
                            <p className="text-gray-600 mb-6">You have successfully logged into your GrowthMattrix agency dashboard.</p>
                            <Link 
                                to="/" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-xl hover:bg-green-600 transition-colors gap-2"
                            >
                                <span>Go to Dashboard</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-block p-3 bg-emerald-50 rounded-2xl text-[#22c55e] mb-4 border border-emerald-100">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Agency Portal Login</h2>
                                <p className="text-gray-600 text-sm mt-2">Access your client campaigns and white-label execution reports.</p>
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@agency.com" 
                                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-semibold text-gray-700">Password</label>
                                    <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs font-semibold text-[#22c55e] hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <Lock className="w-4 h-4" />
                                    </span>
                                    <input 
                                        type="password" 
                                        required 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••" 
                                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-500 text-[15px]"
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-4 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-[15px] group"
                            >
                                <span>Sign In to Dashboard</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="text-center pt-4 border-t border-gray-200/60">
                                <p className="text-sm text-gray-600">
                                    Don't have an agency account?{' '}
                                    <Link to="/book-call" className="font-bold text-[#22c55e] hover:underline">
                                        Partner with us
                                    </Link>
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;