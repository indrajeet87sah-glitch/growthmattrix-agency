import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-[0px_4px_15px_rgba(0,0,0,0.03)] border border-gray-100/80 p-6 hover:shadow-[0px_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full">
      
      {/* Icon Section - Size increased to 50x50 */}
      <div className="mb-5 h-[50px] w-[50px] flex items-center justify-center">
        {icon}
      </div>
      
      {/* Text Section */}
      <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-[16px] text-gray-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Learn More Link with SVG Arrow */}
      <div className="mt-auto">
        {/* group class aur w-fit add kiya hai hover animation ke liye */}
        <a href="#" className="text-[#22c55e] text-[16px] font-bold hover:text-green-600 flex items-center gap-1.5 transition-colors group w-fit">
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 mt-[2px] group-hover:translate-x-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
      
    </div>
  );
};

export default ServiceCard;