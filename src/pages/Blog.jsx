import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            id: "1",
            tag: "Agency Growth",
            title: "How White-Label Fulfillment is Transforming Agency Profit Margins",
            excerpt: "Discover why top-performing digital agencies are shifting from in-house hiring to dedicated white-label execution partners to scale faster and eliminate overhead.",
            date: "October 5, 2026",
            readTime: "5 min read",
            author: "GrowthMattrix Team",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "2",
            tag: "Paid Media",
            title: "Scaling PPC & Meta Ads Across Multiple Client Accounts Without Burnout",
            excerpt: "A deep dive into streamlined campaign frameworks, automated reporting, and advanced attribution tracking for modern growth agencies.",
            date: "September 28, 2026",
            readTime: "7 min read",
            author: "PPC Execution Unit",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: "3",
            tag: "Operations",
            title: "The Ultimate Agency Tech Stack & Workflow Automation Blueprint",
            excerpt: "Streamline client communication, task management, and delivery pipelines using Slack, Zoom, and integrated project management tools.",
            date: "September 15, 2026",
            readTime: "6 min read",
            author: "Operations Lead",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="w-full">
            
            {/* Blog Hero Section */}
            <section className="w-full bg-[#fafafa] py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="gm-container flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                        <p className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            INSIGHTS & STRATEGIES
                        </p>
                        <div className="w-[3px] bg-[#34a853] h-5 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-4xl md:text-[54px] font-extrabold text-black leading-tight tracking-tight mb-6 max-w-[850px]">
                        Expert Knowledge To Scale Your Digital Agency.
                    </h1>
                    
                    <p className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-[640px]">
                        Explore actionable insights, scaling strategies, and industry playbooks written by agency operators and growth experts.
                    </p>
                </div>
            </section>

            {/* Blog Cards Section */}
            <section className="w-full py-24 bg-white">
                <div className="gm-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div 
                                key={post.id}
                                className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden flex flex-col justify-between hover:border-green-400 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div>
                                    <div className="relative h-52 overflow-hidden bg-gray-100">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[12px] font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full">
                                                {post.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 pb-4">
                                        <div className="flex items-center justify-between mb-3 text-[13px] text-gray-500">
                                            <span>{post.date}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-[15px] text-gray-600 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-[13px] font-semibold text-gray-700">{post.author}</span>
                                    <Link 
                                        to={`/blog/${post.id}`} 
                                        className="text-[14px] font-bold text-gray-900 hover:text-green-600 transition-colors flex items-center gap-1 group/link"
                                    >
                                        <span>Read Article</span>
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

export default Blog;