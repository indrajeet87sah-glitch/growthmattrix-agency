import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, CheckCircle2, ArrowRight } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();

    // Mock database for blog posts
    const postsData = {
        "1": {
            tag: "Agency Growth",
            title: "How White-Label Fulfillment is Transforming Agency Profit Margins",
            date: "October 5, 2026",
            readTime: "5 min read",
            author: "GrowthMattrix Team",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
            content: [
                "Digital agency owners face a constant dilemma: how to scale client acquisition without proportionally increasing fixed overhead and recruitment costs. In-house hiring comes with long onboarding cycles, salary commitments, and management overhead that often compresses profit margins.",
                "This is where white-label fulfillment partners are changing the game. By offloading technical execution—such as advanced PPC campaigns, SEO audits, and custom web development—to specialized remote teams, agencies can maintain high delivery quality while keeping overhead razor-thin.",
                "Furthermore, white-label partnerships allow boutique and mid-sized agencies to pitch enterprise-grade services to their clients without turning down projects due to bandwidth constraints."
            ],
            keyTakeaways: [
                "Eliminate recruitment and training overhead instantly.",
                "Scale client delivery capacity without risking quality.",
                "Focus 100% of your internal time on high-margin sales and client retention."
            ]
        },
        "2": {
            tag: "Paid Media",
            title: "Scaling PPC & Meta Ads Across Multiple Client Accounts Without Burnout",
            date: "September 28, 2026",
            readTime: "7 min read",
            author: "PPC Execution Unit",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            content: [
                "Managing paid media campaigns across dozens of client accounts requires rigorous processes, automated reporting frameworks, and bulletproof attribution tracking like GA4 server-side setups.",
                "When media buyers get overwhelmed manually tweaking budgets and building ad sets across Google Ads and Meta, performance slips. The key to sustainable scaling is standardizing campaign structures and leveraging unified dashboards.",
                "Our execution teams rely on modular campaign templates and continuous daily optimization loops to drive lower customer acquisition costs (CAC) and predictable ROAS for every client account."
            ],
            keyTakeaways: [
                "Implement server-side tracking to bypass signal loss.",
                "Standardize campaign naming conventions and budget pacing rules.",
                "Automate weekly client reporting to build absolute transparency."
            ]
        },
        "3": {
            tag: "Operations",
            title: "The Ultimate Agency Tech Stack & Workflow Automation Blueprint",
            date: "September 15, 2026",
            readTime: "6 min read",
            author: "Operations Lead",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
            content: [
                "A fragmented tech stack leads to miscommunication, missed deadlines, and frustrated clients. Building a streamlined operational workflow is essential for modern digital agencies.",
                "By integrating Slack channels, direct Zoom syncs, and centralized project management boards, agencies can create a frictionless environment where white-label partners feel like an in-house extension of the team.",
                "This level of operational transparency builds immense trust and ensures every project is delivered on time, every time."
            ],
            keyTakeaways: [
                "Establish dedicated client Slack channels for rapid communication.",
                "Use centralized dashboards for real-time task visibility.",
                "Maintain strict SLAs and weekly milestone reviews."
            ]
        }
    };

    const post = postsData[id] || postsData["1"];

    return (
        <div className="w-full py-20 bg-white">
            <div className="gm-container max-w-[850px]">
                
                {/* Back Link */}
                <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Articles</span>
                </Link>

                {/* Article Header */}
                <div className="mb-8">
                    <span className="text-[12px] font-bold text-[#22c55e] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 inline-block mb-4">
                        {post.tag}
                    </span>
                    
                    <h1 className="text-3xl md:text-[46px] font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-100">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            {post.readTime}
                        </span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 h-[380px] md:h-[460px] bg-gray-100">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Body Content */}
                <div className="space-y-6 text-[17px] text-gray-700 leading-relaxed mb-12">
                    {post.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                {/* Key Takeaways Box */}
                {post.keyTakeaways && (
                    <div className="bg-[#fafafa] rounded-3xl p-8 border border-gray-200/80 mb-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
                        <ul className="space-y-3">
                            {post.keyTakeaways.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-3 text-[15px] text-gray-800">
                                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Bottom CTA Box */}
                <div className="bg-[#0c1b17] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div>
                        <h4 className="text-2xl font-bold mb-2">Ready to scale your agency?</h4>
                        <p className="text-gray-300 text-sm">Partner with GrowthMattrix for enterprise-grade white-label fulfillment.</p>
                    </div>
                    <Link 
                        to="/book-call" 
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-[#22c55e] hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg whitespace-nowrap gap-2"
                    >
                        <span>Book a Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;