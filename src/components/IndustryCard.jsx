import React from 'react';

const IndustryCard = ({ title, description, image, bgColor }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      
      {/* Image Section - No Padding, Full Width */}
      <div className={`w-full h-[170px] ${bgColor} overflow-hidden relative`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      {/* Text & Icon Section */}
      <div className="p-5 flex justify-between items-center flex-grow bg-white">
        <div className="pr-3">
          <h3 className="text-[18px] font-bold text-gray-900 mb-1.5">{title}</h3>
          <p className="text-[16px] w-[160px] text-gray-500 leading-snug">{description}</p>
        </div>
        
        {/* Green Arrow Icon */}
        <div className="flex-shrink-0">
          <div className="w-[26px] h-[26px] rounded-full border-[1.5px] border-[#22c55e] flex items-center justify-center text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndustryCard;