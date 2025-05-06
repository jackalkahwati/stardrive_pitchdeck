import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const TechnicalAdvantageSlide: React.FC = () => (
  <div className="space-y-6 flex flex-col lg:flex-row lg:items-center lg:gap-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left">
      Technical Advantage
    </h2>

    <div className="flex-1">
    <ul className="space-y-4 max-w-3xl mx-auto lg:mx-0 text-base md:text-lg text-gray-300">
      <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
        <span>
          <span className="font-semibold text-white">Fuel-Free Electromagnetics:</span> Coilguns provide <span className="text-primary">∞ ISP</span>, eliminating the propellant bottleneck.
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
        <span>
          <span className="font-semibold text-white">Mobile & Modular:</span> 20-ft ISO container batteries deploy to any FOB or carrier deck—no pad, no range.
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
        <span>
          <span className="font-semibold text-white">AI Fire-Control:</span> TLE Transformer converts SDA tracks into real-time firing solutions with sub-second latency.
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
        <span>
          <span className="font-semibold text-white">Dual-Use Path:</span> Same platform scales from debris defense today to low-cost orbital launch tomorrow.
        </span>
      </li>
    </ul>
    </div>

    {/* Railgun GIF */}
    <div className="flex-shrink-0 hidden lg:block">
      <Image src="/RAILGUN.gif" alt="Railgun" width={300} height={300} className="rounded-lg border border-gray-700" />
    </div>
  </div>
);

export default TechnicalAdvantageSlide; 