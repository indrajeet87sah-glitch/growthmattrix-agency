import React from 'react';
import { Plus } from 'lucide-react';

// Custom Tool Icons Import from src/assets
import googleAdsIcon from '../assets/google-ads-icon.png';
import metaIcon from '../assets/google-meta-icon.png';
import googleAnalyticsIcon from '../assets/google-analytics-icon.png';
import semrushIcon from '../assets/semrush-ads-icon.png';

const TrustedTools = () => {
  // 1. Left Side: 5 Countries Data
  const countries = [
    {
      name: 'United\nKingdom',
      flag: 'https://flagcdn.com/w80/gb.png',
    },
    {
      name: 'United\nStates',
      flag: 'https://flagcdn.com/w80/us.png',
    },
    {
      name: 'Canada',
      flag: 'https://flagcdn.com/w80/ca.png',
    },
    {
      name: 'Australia',
      flag: 'https://flagcdn.com/w80/au.png',
    },
    {
      name: 'UAE',
      flag: 'https://flagcdn.com/w80/ae.png',
    },
  ];

  // 2. Right Side: 4 Tools Data with Custom Images
  const tools = [
    {
      name: 'Google Ads',
      icon: googleAdsIcon,
    },
    {
      name: 'Meta',
      icon: metaIcon,
    },
    {
      name: 'Google\nAnalytics',
      icon: googleAnalyticsIcon,
    },
    {
      name: 'SEMRUSH',
      icon: semrushIcon,
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-18">
      <div className="gm-container">
        
        {/* Main Centered Wrapper */}
        <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-0">
          
          {/* ================= LEFT SIDE: COUNTRIES ================= */}
          <div className="w-full lg:w-[47%] flex flex-col justify-between">
            <h2 className="text-[22px] sm:text-[25px] lg:text-[34px] font-bold text-gray-950 leading-[1.25] mb-8 text-center lg:text-left">
              Trusted By Ambitious Agencies <br />
              <span className="text-[#0DAC5A]">Worldwide</span>
            </h2>

            {/* 5 Flags Horizontal Row */}
            <div className="flex flex-wrap lg:pe-5 sm:flex-nowrap items-start justify-center lg:justify-between gap-4 sm:gap-2">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[76px]"
                >
                  {/* White Round Shadow Circle */}
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '9999px',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 6px 22px rgba(0, 0, 0, 0.07)',
                      border: '1px solid #f3f4f6',
                    }}
                    className="flex items-center justify-center transition-transform duration-200 hover:-translate-y-1"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      style={{
                        width: '34px',
                        height: '24px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                      }}
                    />
                  </div>

                  {/* Country Label */}
                  <p className="mt-3 font-medium text-gray-800 whitespace-pre-line leading-[1.3]">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CENTER DIVIDER WITH GREEN '+' ================= */}
          {/* Desktop Vertical Divider */}
          <div className="hidden lg:flex relative items-center justify-center px-6">
            <div
              style={{
                width: '1px',
                height: '165px',
                backgroundColor: '#e5e7eb',
              }}
            />
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '9999px',
                backgroundColor: '#0DAC5A',
              }}
              className="absolute text-white flex items-center justify-center shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
          </div>

          {/* Mobile Horizontal Divider */}
          <div className="flex lg:hidden relative w-full items-center justify-center my-2">
            <div className="w-full h-px bg-gray-200" />
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '9999px',
                backgroundColor: '#0DAC5A',
              }}
              className="absolute text-white flex items-center justify-center shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
          </div>

          {/* ================= RIGHT SIDE: TOOLS ================= */}
          <div className="w-full lg:w-[47%] flex flex-col justify-between">
            <h2 className="text-[22px] sm:text-[25px] lg:text-[34px] font-bold text-gray-950 leading-[1.25] mb-8 text-center lg:text-left">
              We Work With The Tools You <br />
              <span className="text-[#0DAC5A]">Already Use</span>
            </h2>

            {/* 4 Tools Horizontal Row with Vertical Separators */}
            <div className="flex flex-wrap sm:flex-nowrap items-start justify-center lg:justify-between w-full">
              {tools.map((tool, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center px-3 sm:px-4">
                    {/* Tool Image Container */}
                    <div
                      style={{ height: '60px' }}
                      className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        style={{
                          height: '46px',
                          width: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    {/* Tool Label */}
                    <p className="mt-2.5 font-medium text-gray-800 whitespace-pre-line leading-[1.3]">
                      {tool.name}
                    </p>
                  </div>

                  {/* Vertical Line Separator between Tools */}
                  {index !== tools.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        height: '52px',
                        backgroundColor: '#e5e7eb',
                      }}
                      className="hidden sm:block self-center mt-[-14px]"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedTools;