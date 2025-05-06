import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

const GapFillSlide: React.FC = () => (
  <div className="flex-1 flex flex-col md:flex-row gap-6">
    {/* Problem */}
    <div className="flex-1 bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 p-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <AlertCircle className="h-5 w-5 text-red-500 mr-2" /> Problem
      </h3>
      <p className="text-base text-gray-300">
        Space and missile defense architectures are tracking-rich but response-poor. No low-latency, fuel-free intercept layer exists.
      </p>
    </div>

    {/* Solution */}
    <div className="flex-1 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> StarDrive Solution
      </h3>
      <p className="text-base text-gray-300">
        StarDrive builds the missing kinetic response layer—mobile coilguns cued by SDA data, driven by AI, and scalable to orbital launch.
      </p>
    </div>
  </div>
);

export default GapFillSlide; 