import React from "react";
import { BadgeCheck } from "lucide-react";

const ExecSummarySlide: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Executive Summary</h2>

    <div className="space-y-4 text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
      <p><span className="text-white font-semibold">Mission:</span> Close the response gap in the SDA kill chain with real-time, kinetic intercept capability.</p>
      <p><span className="text-white font-semibold">Current Focus:</span> Mobile coilgun interceptors integrated with AI-driven SDA software <em>(AstroShield)</em>.</p>
      <p><span className="text-white font-semibold">Dual-Use Path:</span> Interceptor-first, orbital logistics second—same infrastructure.</p>
      <p><span className="text-white font-semibold">Validation:</span> 3 LOIs from defense agencies; Space Force TPOC secured.</p>
    </div>

    <div className="bg-white/5 p-6 rounded-lg border border-gray-800 space-y-4">
      <h3 className="text-xl font-semibold text-white flex items-center justify-center"><BadgeCheck className="h-5 w-5 text-primary mr-2"/>Why StarDrive?</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg max-w-4xl mx-auto">
        <li>Dual-use architecture—defense interceptors today, orbital logistics tomorrow.</li>
        <li>Fuel-free, mobile kinetic response; modular software + hardware stack.</li>
        <li>Fully SDA-integrated: cueing, targeting, deception.</li>
        <li>Future-proof roadmap toward orbital launch.</li>
      </ul>
      <p className="text-center text-gray-400 text-sm italic max-w-xl mx-auto">AstroShield is entering its 3rd cohort at the SDA TAP Lab, enabling subscription revenue and a Direct-to-Phase II SpaceWERX contract alongside our NSF-funded trajectory engine.</p>
    </div>
  </div>
);

export default ExecSummarySlide; 