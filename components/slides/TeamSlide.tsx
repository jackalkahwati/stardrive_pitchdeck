import React from "react";
import Image from "next/image";

const members = [
  { name: "Jack Al-Kahwati", role: "CEO", blurb: "20+ yrs aerospace & tech leadership. Ex-CEO Lattis; led teams at Boeing, BAE Systems, Sikorsky. MS Aero Eng (UF). Multiple hardware patents.", img: "/face_jack.png" },
  { name: "Gerardo Barroeta", role: "CTO", blurb: "MS EE MIT. Led hardware at Juul, BrewBird, Juicero, Jawbone, Swift Nav. IoT & sensors expert with multiple patents.", img: "/face_gerardo.png" },
  { name: "Steve Hong", role: "Lead Mechanical Engineer", blurb: "Mechanical design at Boeing & NASA. BS/MS Mechanical Eng (USF).", img: "/face_steve.png" },
  { name: "Mian Hussain", role: "Lead Systems Engineer", blurb: "Performance engineer at Boeing. BS/MS Mechanical Eng (VT); MBA Yale.", img: "/face_mian.png" },
  { name: "Nino Marcantonio", role: "Advisor", blurb: "Expert in defense tech innovation. Former Deputy Director, Defense Tech Innovation Program & Director, Defense Logistics Innovation Forum.", img: "/face_nino.png" },
];

const TeamSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
      Core Team
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {members.map((m) => (
        <div key={m.name} className="bg-white/5 rounded-lg border border-gray-800 p-4 flex flex-col items-center text-center space-y-2">
          <div className="w-24 h-24 relative rounded-full overflow-hidden border border-primary/40">
            <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover" }} />
          </div>
          <p className="text-white font-semibold mt-2">{m.name}</p>
          <p className="text-gray-400 text-sm">{m.role}</p>
          <p className="text-gray-300 text-xs italic">{m.blurb}</p>
        </div>
      ))}
    </div>

    <div className="mt-10 space-y-4 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-white text-center">Next Steps (12–18 mo)</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-base md:text-lg">
        <li>Range-tested debris intercept by Q4</li>
        <li>Deliver first mobile battery to AFRL customer</li>
        <li>Secure $150M counter-hypersonic OTA</li>
        <li>Spin up orbital launch pathfinder demo</li>
      </ul>
    </div>
  </div>
);

export default TeamSlide; 