import React from "react";
import { TrendingUp } from "lucide-react";

const phases = [
  { year: "2025", label: "Debris Defense Demos", revenue: "$8M DoD SBIR + LOI" },
  { year: "2026", label: "LEO Debris Intercept Service", revenue: "$40M OTA" },
  { year: "2027", label: "Counter-Hypersonic Batteries", revenue: "$150M MTA" },
  { year: "2028", label: "Orbital Launch-as-a-Service", revenue: "$300M Commercial" },
];

const RevenueRoadmapSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
      Revenue Roadmap
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-[600px] w-full text-left text-gray-300">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="py-3 pr-4">Year</th>
            <th className="py-3 pr-4">Milestone</th>
            <th className="py-3">Projected Revenue</th>
          </tr>
        </thead>
        <tbody>
          {phases.map((p) => (
            <tr key={p.year} className="border-b border-gray-800">
              <td className="py-3 pr-4 text-white font-medium flex items-center"><TrendingUp className="h-4 w-4 text-primary mr-2" />{p.year}</td>
              <td className="py-3 pr-4">{p.label}</td>
              <td className="py-3">{p.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RevenueRoadmapSlide; 