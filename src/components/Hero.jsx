import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, UserCheck, Settings, Globe } from 'lucide-react';
import heroBg from '../assets/hero-bg.webp';

const Hero = () => {
  const features = [
    {
      id: 1,
      icon: Home,
      line1: 'White-Label',
      line2: 'Delivery',
    },
    {
      id: 2,
      icon: UserCheck,
      line1: 'Lower Costs,',
      line2: 'Higher Margins',
    },
    {
      id: 3,
      icon: Settings,
      line1: 'Reliable &',
      line2: 'Scalable Support',
    },
    {
      id: 4,
      icon: Globe,
      line1: 'White-Label',
      line2: 'Delivery',
    },
  ];

  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[680px] flex items-center overflow-hidden bg-white">
      
      {/* 1. Background Image & Clean Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="GrowthMattrix Office"
          className="w-full h-full object-cover object-right"
        />

        {/* Mobile/Tablet Overlay: Thoda zyada solid white taaki piche ka wall text front typography se na takraye */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/92 to-white/95 lg:hidden backdrop-blur-[2px]" />

        {/* Desktop Left-to-Right White Fade */}
        <div className="hidden md:block lg:hidden absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      {/* 2. Content Container (1330px gm-container) */}
      <div className="gm-container relative z-10 py-10 sm:py-16 lg:py-24">
        <div className="max-w-[620px]">
          
          {/* Top Small Subheading (Fixed Line-Height & Tracking) */}
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.06em] text-gray-800 leading-snug mb-2.5 sm:mb-3.5">
            Outsourced PPC, SEO & Creative For Agency Growth
          </p>

          {/* Main Heading (Mobile par 28px-30px taaki 'You Bring the Clients.' ek hi line mein aaye) */}
          <h1 className="text-[28px] xs:text-[32px] sm:text-5xl lg:text-[54px] font-bold tracking-[-0.02em] leading-[1.18] text-gray-950">
            <span className="block whitespace-nowrap">You Bring the Clients.</span>
            <span className="block text-[#0DAC5A] mt-0.5">We Do the Rest.</span>
          </h1>

          {/* Description Paragraph (Balanced Font Size & Line Height) */}
          <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[15px] text-gray-700 font-normal leading-[1.65] max-w-[520px]">
            A trusted white-label growth partner for marketing agencies. Scale
            your client delivery, reduce costs and increase profitability with our
            expert team in Google Ads, Meta Ads, SEO and creative.
          </p>

          {/* Two Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/book-call"
              className="bg-[#0DAC5A] hover:bg-[#0b964f] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-md flex items-center gap-2 transition shadow-xs"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="bg-white/90 hover:bg-white text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-md border border-gray-800 flex items-center gap-2 transition"
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bottom 4 Icons Row */}
          <div className="mt-10 sm:mt-12 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4">
            {features.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2.5 bg-white/70 lg:bg-transparent p-2 lg:p-0 rounded-lg border border-gray-100 lg:border-none"
                >
                  <IconComponent
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#0DAC5A] shrink-0"
                    strokeWidth={1.75}
                  />
                  <div className="text-[11px] sm:text-xs lg:text-[13px] font-medium text-gray-800 leading-tight">
                    <p>{item.line1}</p>
                    <p>{item.line2}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;