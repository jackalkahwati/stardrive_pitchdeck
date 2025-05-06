import React from "react";
import { Clock } from "lucide-react";

const MarketTimingSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Market Timing</h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
      Hypersonics, ASAT, and proliferated LEO drive demand for fast-react interceptors. DoD is spending <span className="text-white font-semibold">$1.3&nbsp;T</span> over 10 years on SDA & missile defense, yet no funded solution exists for fuel-free, mobile kinetic response.
    </p>
    <div className="flex justify-center">
      <Clock className="h-12 w-12 text-primary" />
    </div>
  </div>
);

export default MarketTimingSlide; 