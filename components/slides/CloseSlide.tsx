import React from "react";
import { Mail } from "lucide-react";

const CloseSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">Ask: $10M Seed / Series A</h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
      Outcome: Validated interceptor + dual-use SDA architecture
    </p>
    <a href="https://calendly.com/jackalkahwati/meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-sm font-medium">
      <Mail className="h-4 w-4" /> Schedule Investment Discussion
    </a>
  </div>
);

export default CloseSlide; 