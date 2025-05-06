import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

const TitleSlide: React.FC = () => (
  <div className="flex-1 min-h-[65vh] pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
    {/* Background */}
    <Image src="/hero.png" alt="Background" fill className="object-cover pointer-events-none select-none" />

    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white max-w-4xl leading-tight text-shadow">
        StarDrive: Electromagnetic Interceptors for Space and Missile Defense
      </h1>
      <p className="text-lg text-gray-300 mb-4">
        Fuel-free, mobile, and SDA-integrated. Built for kinetic response now, scalable to orbital launch later.
      </p>
      <p className="text-base md:text-lg text-gray-300 italic mb-6">Validated by U.S. Space Force, NSF, and defense LOIs</p>
      <a
        href="https://calendly.com/jackalkahwati/meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-sm font-medium"
      >
        Request Briefing
      </a>
    </div>
  </div>
);

export default TitleSlide; 