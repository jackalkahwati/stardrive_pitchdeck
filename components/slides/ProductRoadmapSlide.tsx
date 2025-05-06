import React from "react";

const milestones = [
  { year: "2025", text: "AstroShield revenue + coilgun interceptor demo (TRL 6)" },
  { year: "2026", text: "Fielded interceptor for DoD + partner nations" },
  { year: "2027", text: "Orbital variant development begins" },
  { year: "2028", text: "Orbital Relay prototype flight" },
  { year: "2029", text: "Commercial readiness for launch-as-a-service" },
];

const ProductRoadmapSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Product Roadmap</h2>
    <div className="overflow-x-auto">
      <table className="min-w-[600px] w-full text-left text-gray-300">
        <tbody>
          {milestones.map((m) => (
            <tr key={m.year} className="border-b border-gray-800">
              <td className="py-3 pr-6 text-white font-medium w-24">{m.year}</td>
              <td className="py-3">{m.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductRoadmapSlide; 