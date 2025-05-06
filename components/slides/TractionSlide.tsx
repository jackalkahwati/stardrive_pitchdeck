import React from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "3 proposals down-selected by JRAC / Land Armaments Division for kinetic response demos",
  "AstroShield entering 3rd cohort at SDA TAP Lab; live conversations with J2 & J3",
  "Space Force TPOC and LOI support for Direct-to-Phase-II SpaceWERX SBIR (foundation models)",
  "NSF SBIR Phase I application for coilgun R&D (Alien TT supporting)",
  "<a href=\"https://huggingface.co/jackal79/tle-orbit-explainer\" target=\"_blank\" class=\"text-primary underline\">Fine-tuned TLE Transformer</a> converts TLEs → ephemeris and outperforms 30-yr-old SGP-4 model",
];

const TractionSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Traction & Validation</h2>
    <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary mt-1" /> <span dangerouslySetInnerHTML={{ __html: p }} /></li>
      ))}
    </ul>
  </div>
);

export default TractionSlide; 