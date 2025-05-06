import React from "react";
import { CheckCircle, DollarSign } from "lucide-react";

const govWins = [
  "US Space Force STTR Ph II ($1.8M)",
  "NSF SBIR Ph I ($275k)",
  "AFRL Range Debris LOI (2 tons targets)",
  "MUOS Debris OA Letter"
];

const ValidationSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
      Gov't Validation &amp; Funding Ask
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Validation */}
      <div className="bg-white/5 rounded-lg border border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <CheckCircle className="h-5 w-5 text-primary mr-2" /> Validation Wins
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg">
          {govWins.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>

      {/* Funding Ask */}
      <div className="bg-white/5 rounded-lg border border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <DollarSign className="h-5 w-5 text-primary mr-2" /> Seed Round (Q3 2024)
        </h3>
        <p className="text-gray-300 text-base md:text-lg">
          Raising <span className="text-white font-medium">$5M</span> to complete range demos, deliver first debris intercept, and secure counter-hypersonic OTA.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-300 text-base md:text-lg">
          <li>40% Engineering (battery, launcher, AI)</li>
          <li>30% Range &amp; Flight Tests</li>
          <li>20% Manufacturing Setup</li>
          <li>10% Working Capital</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ValidationSlide; 