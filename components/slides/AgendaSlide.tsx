import React from "react";

const AgendaSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center h-full">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Today's Briefing</h2>
    <ol className="space-y-3 text-lg md:text-xl text-gray-300 list-decimal list-inside max-w-xl">
      <li>Executive Summary</li>
      <li>The Gap We Fill</li>
      <li>Golden Dome Architecture Fit</li>
      <li>Technical Advantage</li>
      <li>Competitive Moat</li>
      <li>Market Timing</li>
      <li>Product Roadmap</li>
      <li>Immediate Revenue</li>
      <li>Long-Term Upside</li>
      <li>Use of Funds</li>
      <li>Team</li>
      <li>Close & Ask</li>
    </ol>
  </div>
);

export default AgendaSlide; 