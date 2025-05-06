"use client"

import { useState, useEffect, useRef } from "react";
import SlideShell from "@/components/SlideShell";
import TitleSlide from "@/components/slides/TitleSlide";
import AgendaSlide from "@/components/slides/AgendaSlide";
import ProblemSolutionSlide from "@/components/slides/ProblemSolutionSlide";
import ArchitectureFitSlide from "@/components/slides/ArchitectureFitSlide";
import TechnicalAdvantageSlide from "@/components/slides/TechnicalAdvantageSlide";
import CompetitiveMoatSlide from "@/components/slides/CompetitiveMoatSlide";
import RevenueRoadmapSlide from "@/components/slides/RevenueRoadmapSlide";
import ValidationSlide from "@/components/slides/ValidationSlide";
import TeamSlide from "@/components/slides/TeamSlide";
import ContactSlide from "@/components/slides/ContactSlide";
import ExecSummarySlide from "@/components/slides/ExecSummarySlide";
import GapFillSlide from "@/components/slides/GapFillSlide";
import MarketTimingSlide from "@/components/slides/MarketTimingSlide";
import ProductRoadmapSlide from "@/components/slides/ProductRoadmapSlide";
import ImmediateRevenueSlide from "@/components/slides/ImmediateRevenueSlide";
import LongTermUpsideSlide from "@/components/slides/LongTermUpsideSlide";
import UseOfFundsSlide from "@/components/slides/UseOfFundsSlide";
import CloseSlide from "@/components/slides/CloseSlide";
import TractionSlide from "@/components/slides/TractionSlide";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const slides = [
    <TitleSlide />,
    <ExecSummarySlide />,
    <GapFillSlide />,
    <ArchitectureFitSlide />,
    <TechnicalAdvantageSlide />,
    <CompetitiveMoatSlide />,
    <MarketTimingSlide />,
    <TractionSlide />,
    <ProductRoadmapSlide />,
    <ImmediateRevenueSlide />,
    <LongTermUpsideSlide />,
    <UseOfFundsSlide />,
    <TeamSlide />,
    <CloseSlide />,
  ];
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Arrow-key navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setIdx((i) => Math.min(i + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setIdx((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [slides.length]);

  // Touch swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setIdx((i) => Math.min(i + 1, slides.length - 1)); // swipe left
      else setIdx((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#0a1929] flex flex-col">
      <div className="flex-1 flex items-center justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Fade-in animation on slide change */}
        <SlideShell key={idx} index={idx} total={slides.length}>
          <div className="animate-fadeIn w-full h-full">{slides[idx]}</div>
        </SlideShell>
      </div>

      <div className="flex items-center justify-center gap-4 py-4 bg-[#0a1929] border-t border-[#1e3a5f] flex-wrap">
        <Button onClick={() => setIdx((i) => Math.max(i - 1, 0))} disabled={idx === 0} size="icon" variant="outline">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {slides.map((_, i) => (
          <Button
            key={i}
            size="sm"
            className="hidden sm:inline-flex"
            variant={i === idx ? "default" : "outline"}
            onClick={() => setIdx(i)}
          >
            {i + 1}
          </Button>
        ))}
        <Button onClick={() => setIdx((i) => Math.min(i + 1, slides.length - 1))} disabled={idx === slides.length - 1} size="icon" variant="outline">
          <ChevronRight className="h-4 w-4" />
        </Button>
        {/* Progress dots for mobile */}
        <div className="flex gap-1 sm:hidden">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-primary" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

