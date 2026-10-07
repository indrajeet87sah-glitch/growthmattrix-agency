import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

const ChallengeSolution = () => {
  // 1. Column 1 Data: The Challenge
  const challenges = [
    'High Salaries And Recruitment Costs',
    'Time Spent On Training And Management',
    'Inconsistent Quality And Delivery Delays',
    'Hard To Scale Profitably',
  ];

  // 2. Column 2 Data: Our Solution
  const solutions = [
    'Experienced Specialists, Ready To Work',
    'Cost-Effective, Scalable And Reliable',
    '100% White-Label (Your Brand, Our Work)',
    'Focus On Sales And Client Relationships',
  ];

  // 3. Column 3 Data: Comparison Table Rows
  const comparisonRows = [
    {
      metric: 'Monthly Cost',
      inHouse: '£5,000+',
      ourTeam: 'From £750',
      highlightGreen: false,
    },
    {
      metric: 'Hiring Time',
      inHouse: '2–3 Months',
      ourTeam: 'None',
      highlightGreen: true,
    },
    {
      metric: 'Management',
      inHouse: 'Your Time',
      ourTeam: 'Our Team',
      highlightGreen: false,
    },
    {
      metric: 'Scalability',
      inHouse: 'Slow',
      ourTeam: 'Instant',
      highlightGreen: true,
    },
    {
      metric: 'Profit Margin',
      inHouse: 'Lower',
      ourTeam: 'Higher',
      highlightGreen: true,
    },
  ];

  return (
    <section className="w-full bg-white pb-14 lg:pb-20">
      <div className="gm-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* ================= COLUMN 1: THE CHALLENGE ================= */}
          <div className="lg:col-span-4 space-y-4">
            {/* Top Red Badge */}
            <div className="flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-white fill-[#DC2626]" />
              <span className="text-sm sm:text-lg uppercase tracking-wide text-gray-900">
                THE CHALLENGE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[34px] font-bold text-gray-950 leading-[1.25]">
              Growing An Agency Is <br />
              Hard And Expensive.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-[16px] text-gray-500 leading-relaxed">
              Hiring And Managing An In-House Team For Google Ads, Meta Ads, SEO
              And Creative Is Costly, Time-Consuming And Risky — Especially For
              Startup And Growing Agencies.
            </p>

            {/* Red Cross Bullet List */}
            <ul className="pt-2 space-y-3">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <XCircle className="w-6 h-6 text-white fill-[#DC2626] shrink-0" />
                  <span className="text-sm sm:text-[16px] font-medium text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 2: OUR SOLUTION ================= */}
          <div className="lg:col-span-4 space-y-4">
            {/* Top Green Badge */}
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-white fill-[#0DAC5A]" />
              <span className="text-sm sm:text-lg uppercase tracking-wide text-gray-900">
                OUR SOLUTION
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[30px] font-bold text-gray-950 leading-[1.25]">
              A Dedicated White-Label Team For Your Agency.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[16px] text-gray-500 leading-relaxed">
              We Work As Your Extended Team, Delivering High-Quality PPC, SEO
              And Creative Under Your Brand — So You Can Serve More Clients,
              Make Higher Margins And Grow Faster.
            </p>

            {/* Green Check Bullet List */}
            <ul className="pt-2 space-y-3">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-6 h-6 text-white fill-[#0DAC5A] shrink-0" />
                  <span className="text-sm sm:text-[16px] font-medium text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: DARK GREEN COMPARISON CARD ================= */}
          <div className="lg:col-span-4">
            <div className="bg-[#1C362B] text-white rounded-2xl p-6 sm:p-7 shadow-xl">
              {/* Card Title */}
              <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-5">
                Same Expertise. <br />
                A Fraction Of The Cost.
              </h3>

              {/* Comparison Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                  <thead>
                    <tr>
                      <th className="p-2.5 border-b border-white/10"></th>
                      <th className="p-2.5 border border-white/10 text-center font-medium text-gray-200">
                        In-House Team
                      </th>
                      <th className="p-2.5 border border-white/10 text-center font-medium text-gray-200">
                        In-House Team
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2.5 border border-white/10 font-normal text-gray-200">
                          {row.metric}
                        </td>
                        <td className="p-2.5 border border-white/10 text-center text-gray-200">
                          {row.inHouse}
                        </td>
                        <td
                          className={`p-2.5 border border-white/10 text-center font-medium ${
                            row.highlightGreen
                              ? 'text-[#39B56A]'
                              : 'text-gray-100'
                          }`}
                        >
                          {row.ourTeam}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom Tagline */}
              <p className="mt-5 text-sm sm:text-[15px] font-medium text-[#39B56A]">
                Scale Smarter. Stay Profitable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;