import React from "react";
import { CheckCircle } from "lucide-react";

const ArchitectureFitSlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Where We Fit: Golden Dome Architecture</h2>

    <div className="overflow-auto bg-white/5 p-4 rounded-lg border border-gray-800">
      <table className="w-full min-w-[500px] text-sm text-gray-300">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="py-2 pr-4">Layer</th>
            <th className="py-2 pr-4">Function</th>
            <th className="py-2">StarDrive Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800">
            <td className="py-2 pr-4 text-white font-medium">L1</td>
            <td className="py-2 pr-4">Kinetic Intercept / Launch</td>
            <td className="py-2"><CheckCircle className="inline h-4 w-4 text-primary mr-1" />Coilgun Interceptor Grid</td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="py-2 pr-4 text-white font-medium">L3</td>
            <td className="py-2 pr-4">C2 + Maneuvering / Deception</td>
            <td className="py-2"><CheckCircle className="inline h-4 w-4 text-primary mr-1" />AstroShield CCDM Engine</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 text-white font-medium">L6</td>
            <td className="py-2 pr-4">Trajectory Prediction / Targeting</td>
            <td className="py-2"><CheckCircle className="inline h-4 w-4 text-primary mr-1" />TLE Transformer</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-center italic text-gray-400">"While others observe, we respond."</p>
    </div>
  </div>
);

export default ArchitectureFitSlide; 