import React from "react";
import { Shield } from "lucide-react";

const CompetitiveMoatSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
      Competitive Moat
    </h2>

    <div className="overflow-auto bg-white/5 p-4 rounded-lg border border-gray-800">
      <table className="w-full min-w-[500px] text-sm text-gray-300">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="py-2 pr-4">Feature</th>
            <th className="py-2 pr-4">StarDrive</th>
            <th className="py-2 pr-4">Missiles</th>
            <th className="py-2">Space Launch</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Reusable", "✅ Yes", "❌ No", "⚠ Limited"],
            ["Fuel-Free", "✅ Yes", "❌ No", "❌ No"],
            ["Software-Cued", "✅ Yes", "❌ No", "⚠ Partial"],
            ["Dual-Use Roadmap", "✅ Yes", "❌ No", "✅ Yes"],
          ].map((row) => (
            <tr key={row[0]} className="border-b border-gray-800">
              {row.map((cell, idx) => (
                <td key={idx} className="py-2 pr-4 text-center first:text-left">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-center italic text-gray-400 max-w-3xl mx-auto">
        Lowest cost per shot. Fastest launch cycle. Only system that spans intercept & orbit.
      </p>
    </div>
  </div>
);

export default CompetitiveMoatSlide; 