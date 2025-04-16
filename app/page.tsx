"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Shield,
  Zap,
  Globe,
  ChevronRight,
  BarChart3,
  Users,
  DollarSign,
  ChevronLeft,
  Lock,
  Rocket,
  Target,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Award,
  Layers,
  Cpu,
  Mail,
  X,
  Check,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const totalSlides = 15

  useEffect(() => {
    setMounted(true)
  }, [])

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a1929]">
      <div className="flex-1 flex flex-col">
        {/* Slide container */}
        <div className="flex-1 flex items-center justify-center p-2 md:p-4 lg:p-8">
          <div className="bg-gradient-to-br from-[#0f2942] to-[#071525] rounded-xl shadow-2xl w-full max-w-7xl overflow-hidden relative border border-[#1e3a5f] min-h-[80vh] md:min-h-0">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"></div>

            {/* Slide 1: Title */}
            {currentSlide === 0 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white max-w-4xl leading-tight">
                    StarDrive: Electromagnetic Launch Infrastructure
                  </h1>
                  <p className="text-lg text-gray-300 mb-4">
                    Enabling rapid, reusable, and cost-effective orbital logistics for strategic space dominance.
                  </p>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="h-1 w-10 bg-primary/30"></div>
                    <p className="text-base md:text-lg text-gray-300">
                      Partners & Validation: U.S. Space Force • NSF Supported • Defense Partnerships
                    </p>
                    <div className="h-1 w-10 bg-primary/30"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:justify-center">
                    <a href="https://calendly.com/jackalkahwati/meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-4 h-auto text-base rounded-md">
                        Request Briefing
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center">
                  <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm text-primary">CONFIDENTIAL</span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2: Executive Summary - NEW */}
            {currentSlide === 1 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-2 md:mt-4 lg:mt-8">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">EXECUTIVE SUMMARY</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-white">Investment & Market Snapshot</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-b from-primary/20 to-transparent p-3 rounded-lg border border-primary/30">
                      <h3 className="text-lg font-bold text-white mb-2">TAM</h3>
                      <div className="text-2xl font-bold text-white mb-1">$18.1B</div>
                      <p className="text-xs text-gray-300">Annual market by 2028</p>
                      </div>
                    
                    <div className="bg-gradient-to-b from-primary/20 to-transparent p-3 rounded-lg border border-primary/30">
                      <h3 className="text-lg font-bold text-white mb-2">SAM</h3>
                      <div className="text-2xl font-bold text-white mb-1">$2.36B</div>
                      <p className="text-xs text-gray-300">Targeted annual segment</p>
                      </div>
                    
                    <div className="bg-gradient-to-b from-primary/20 to-transparent p-3 rounded-lg border border-primary/30">
                      <h3 className="text-lg font-bold text-white mb-2">Immediate SOM</h3>
                      <div className="text-2xl font-bold text-white mb-1">$3.55M</div>
                      <p className="text-xs text-gray-300">Annual immediate revenue</p>
                      </div>
                    
                    <div className="bg-gradient-to-b from-primary/20 to-transparent p-3 rounded-lg border border-primary/30">
                      <h3 className="text-lg font-bold text-white mb-2">3-Year SOM</h3>
                      <div className="text-2xl font-bold text-white mb-1">$25M</div>
                      <p className="text-xs text-gray-300">Annual potential by year 3</p>
                      </div>
                  </div>
                  
                  <div className="mt-6 bg-white/5 p-4 rounded-lg border border-gray-800">
                    <h3 className="text-base font-bold text-white mb-2">Why StarDrive?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-gray-300">Immediate orbital launch capabilities</p>
                    </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                        <p className="text-sm text-gray-300">Proven revenue stream through AstroShield on Global Data Marketplace (GDM)</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                        <p className="text-sm text-gray-300">Significant cost advantage (up to 90% savings at scale)</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-gray-300">Clear acquisition and growth pathways</p>
                    </li>
                  </ul>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">02</div>
                </div>
              </div>
            )}

            {/* Slide 3: Problem & Solution */}
            {currentSlide === 2 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-12 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-2 md:mt-4 lg:mt-8">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">PROBLEM & SOLUTION</span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold tracking-tight mb-8 text-white">Space Access Challenge</h2>
                </div>

                <div className="flex-1 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 p-5 mb-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        Current Industry Problem
                      </h3>
                      <p className="text-base text-gray-300">
                        Traditional rockets are costly, inflexible, and operationally slow.
                    </p>
                  </div>
                    </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        StarDrive Solution
                      </h3>
                      <p className="text-base text-gray-300">
                        Electromagnetic launch technology providing instantaneous, reusable, and cost-efficient orbital access complementing existing rocket systems.
                    </p>
                  </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-8">
                  <div className="text-sm text-gray-500">03</div>
                </div>
              </div>
            )}

            {/* Slide 4: Key Market Drivers */}
            {currentSlide === 3 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-12 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-2 md:mt-4 lg:mt-8">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">MARKET DRIVERS</span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold tracking-tight mb-8 text-white">Key Strategic Challenges</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 p-5">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      Emerging Threats
                    </h3>
                    <p className="text-sm text-gray-300">
                      Hypersonic missiles, ASAT attacks, EMP scenarios requiring immediate orbital response
                    </p>
                  </div>

                  <div className="bg-gradient-to-b from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/30 p-5">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                      Current Limitations
                    </h3>
                    <p className="text-sm text-gray-300">
                      Months-long response times, high costs, inflexible logistics
                    </p>
                    </div>

                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      StarDrive's Impact
                    </h3>
                    <p className="text-sm text-gray-300">
                      Instantaneous response capability, significantly lower cost, reusable systems
                    </p>
                    </div>
                  </div>

                <div className="mt-8 bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-5">
                  <h3 className="text-xl font-bold text-white mb-4">Strategic Response Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 p-3 rounded-lg border border-gray-700">
                      <h4 className="text-base font-bold text-white mb-1">Conventional</h4>
                      <div className="relative h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                      <p className="text-xs text-gray-400 mt-1">3-6 months</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-gray-700">
                      <h4 className="text-base font-bold text-white mb-1">Rapid Launch</h4>
                      <div className="relative h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">2-4 weeks</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-gray-700">
                      <h4 className="text-base font-bold text-white mb-1">StarDrive</h4>
                      <div className="relative h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">3-6 hours</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">04</div>
                </div>
              </div>
            )}

            {/* Slide 5: Replaced with Technology Applications content */}
            {currentSlide === 4 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-8 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">APPLICATION SPECTRUM</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Advanced Technology Applications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                  <div className="bg-white/5 p-5 rounded-lg border border-gray-800 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-white">Electromagnetic Launch Systems</h3>
                    </div>
                    <div className="flex flex-col h-full flex-grow">
                      <Image 
                        src="RAILGUN.gif" 
                        alt="Railgun Technology" 
                        width={400} 
                        height={250} 
                        className="rounded-lg object-cover border border-gray-700 mb-4 self-center"
                      />
                      <ul className="space-y-2 flex-1 mt-auto">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Low-cost, reusable orbital asset deployment</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Rapid response capability (hours vs. months)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Multi-mission flexibility with modular design</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg border border-gray-800 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-white">Space Domain Awareness</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-grow">
                      <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-4">
                        <h4 className="text-base font-bold text-white mb-2">AstroShield Platform</h4>
                        <p className="text-xs text-gray-300 mb-2">AI-powered object detection and tracking with 99.2% accuracy</p>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <p className="text-xs text-blue-400 mt-1">TRL 6</p>
                      </div>
                      <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-4">
                        <h4 className="text-base font-bold text-white mb-2">Predictive Analytics</h4>
                        <p className="text-xs text-gray-300 mb-2">80% early warning capability for unexpected orbital maneuvers</p>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-green-400 mt-1">Operational</p>
                      </div>
                      <div className="bg-gradient-to-b from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/30 p-4">
                        <h4 className="text-base font-bold text-white mb-2">Threat Response</h4>
                        <p className="text-xs text-gray-300 mb-2">Integrated system for rapid asset deployment to counter threats</p>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-yellow-400 mt-1">TRL 4-5</p>
                      </div>
                      <div className="bg-gradient-to-b from-purple-500/10 to-transparent rounded-lg border border-purple-500/30 p-4">
                        <h4 className="text-base font-bold text-white mb-2">Network Integration</h4>
                        <p className="text-xs text-gray-300 mb-2">Seamless API interface with government defense systems</p>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <p className="text-xs text-purple-400 mt-1">In development</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">05</div>
                </div>
              </div>
            )}

            {/* Slide 6: Competitive Advantage (Index 5) */}
            {currentSlide === 5 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-8 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>
                <div className="mt-2 md:mt-4 lg:mt-8">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">COMPETITIVE ADVANTAGE</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6 text-white">Market Differentiation</h2>
                </div>
                <div className="overflow-auto bg-white/5 p-2 md:p-4 lg:p-6 rounded-lg border border-gray-800">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="p-3 text-left text-gray-400 text-sm font-medium">Feature</th>
                        <th className="p-3 text-left text-gray-400 text-sm font-medium">StarDrive</th>
                        <th className="p-3 text-left text-gray-400 text-sm font-medium">Rockets</th>
                        <th className="p-3 text-left text-gray-400 text-sm font-medium">Space Tugs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="p-3 text-gray-300 text-sm">Instant Launch Capability</td>
                        <td className="p-3 text-primary text-sm font-medium">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3 text-gray-300 text-sm">Fully Reusable, Fuel-Free</td>
                        <td className="p-3 text-primary text-sm font-medium">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3 text-gray-300 text-sm">Integrated Threat Detection Software</td>
                        <td className="p-3 text-primary text-sm font-medium">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-300 text-sm">Rapid Response</td>
                        <td className="p-3 text-primary text-sm font-medium">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <X className="h-4 w-4 text-red-500" />
                        </td>
                        <td className="p-3 text-gray-400 text-sm">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-gradient-to-b from-primary/10 to-transparent rounded-lg border border-primary/30 p-5">
                  <h3 className="text-xl font-bold text-white mb-3">StarDrive Advantage</h3>
                  <p className="text-gray-300">
                    Dramatic cost reduction, immediate readiness, strategic flexibility.
                  </p>
                </div>
                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">06</div>
                </div>
              </div>
            )}

            {/* Slide 7: TAM, SAM, SOM Analysis (Index 6) */}
            {currentSlide === 6 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-8 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">MARKET OPPORTUNITY</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">TAM, SAM, SOM Analysis</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-5">
                    <h3 className="text-xl font-bold text-white mb-4">Market Sizing</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <BarChart3 className="h-4 w-4 text-blue-400" />
                      </div>
                        <div>
                          <h4 className="font-bold text-white">TAM: $18.1B/year</h4>
                          <p className="text-sm text-gray-300">Global SDA, Defense & Commercial SSA by 2028</p>
                      </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <BarChart3 className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">SAM: $2.36B/year</h4>
                          <p className="text-sm text-gray-300">Addressable segments</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <BarChart3 className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Immediate SOM: $3.55M/year</h4>
                          <p className="text-sm text-gray-300">Realistic immediate penetration</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Speculative SOM: $25M/year</h4>
                          <p className="text-sm text-gray-300">Within 3 years (expanded integrations and contracts)</p>
                        </div>
                      </li>
                    </ul>
                    </div>

                  <div className="flex flex-col">
                    <div className="bg-gradient-to-b from-primary/10 to-transparent rounded-lg border border-primary/30 p-5 mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Market Penetration Strategy</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                          <p className="text-sm text-gray-300">Begin with AstroShield data products (immediate revenue)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Expand integrations with defense and commercial partners</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Deploy Mark 1 Coilgun for government clients (2025-2026)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-sm text-gray-300">Scale to commercial market beginning 2027</p>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 p-5 rounded-lg border border-gray-800">
                      <h3 className="text-xl font-bold text-white mb-4">Market Growth Projections</h3>
                      <div className="relative h-28">
                        <div className="absolute bottom-0 left-0 w-1/4 h-12 bg-gradient-to-t from-green-500/40 to-green-500/10 border-t border-green-500 rounded-t-sm">
                          <div className="absolute -top-6 w-full text-center text-xs text-green-400 font-medium">$3.55M</div>
                          <div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">Year 1</div>
                      </div>
                        <div className="absolute bottom-0 left-1/4 w-1/4 h-16 bg-gradient-to-t from-green-500/40 to-green-500/10 border-t border-green-500 rounded-t-sm">
                          <div className="absolute -top-6 w-full text-center text-xs text-green-400 font-medium">$10M</div>
                          <div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">Year 2</div>
                      </div>
                        <div className="absolute bottom-0 left-2/4 w-1/4 h-20 bg-gradient-to-t from-green-500/40 to-green-500/10 border-t border-green-500 rounded-t-sm">
                          <div className="absolute -top-6 w-full text-center text-xs text-green-400 font-medium">$20M</div>
                          <div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">Year 3</div>
                        </div>
                        <div className="absolute bottom-0 left-3/4 w-1/4 h-28 bg-gradient-to-t from-green-500/40 to-green-500/10 border-t border-green-500 rounded-t-sm">
                          <div className="absolute -top-6 w-full text-center text-xs text-green-400 font-medium">$30M+</div>
                          <div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">Year 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">07</div>
                </div>
              </div>
            )}

            {/* Slide 8: Immediate Revenue Opportunities (Index 7) */}
            {currentSlide === 7 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-8 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">REVENUE</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Immediate Revenue Opportunities (Next 12–18 months)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5 min-w-[320px] flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Conjunction Event Feeds</h3>
                      <div className="px-4 py-1 bg-green-500/20 rounded-full border border-green-500/30 min-w-[160px] flex justify-center">
                        <span className="text-xs font-medium text-green-400">$250K–$1.25M</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Real-time conjunction analysis and risk assessment for defense and commercial satellite operators
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-xs text-green-400 ml-2">High confidence</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5 min-w-[320px] flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Maneuver Detection</h3>
                      <div className="px-4 py-1 bg-green-500/20 rounded-full border border-green-500/30 min-w-[160px] flex justify-center">
                        <span className="text-xs font-medium text-green-400">$200K–$800K</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Advanced detection algorithms for identifying unusual orbital maneuvers by potential adversary satellites
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs text-green-400 ml-2">High confidence</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5 min-w-[320px] flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Threat Assessment</h3>
                      <div className="px-4 py-1 bg-green-500/20 rounded-full border border-green-500/30 min-w-[160px] flex justify-center">
                        <span className="text-xs font-medium text-green-400">$150K–$1.25M</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Integrated threat detection reports for potential antisatellite activities and space-based threats
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-xs text-green-400 ml-2">High confidence</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 mt-6">
                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5 min-w-[320px] flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Predictive Analytics</h3>
                      <div className="px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                        <span className="text-xs font-medium text-green-400">$100K–$750K</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      ML-powered predictive analytics for future orbital events and potential threats
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                      <span className="text-xs text-green-400 ml-2">Medium-high confidence</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border border-green-500/30 p-5 min-w-[320px] flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">Object Characterization</h3>
                      <div className="px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                        <span className="text-xs font-medium text-green-400">$300K–$1.5M</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      AI-based identification and classification of unidentified orbital objects
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-2 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-xs text-green-400 ml-2">High confidence</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white/5 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-2">Projected Immediate Revenue:</h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-green-400">$1M–$5.5M/year</span>
                    <span className="ml-3 text-sm text-gray-400">(From AstroShield software products alone)</span>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">08</div>
                </div>
              </div>
            )}

            {/* Slide 9: Long-Term Revenue Upside (Index 8) */}
            {currentSlide === 8 && (
              <div className="h-full w-full flex flex-col p-6 md:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">REVENUE UPSIDE</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">Long-Term Revenue Upside (2–3 Year Horizon)</h2>
                </div>

                {/* Reduce gap and padding in the grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Box 1: Integrated API Subscriptions */}
                  <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base md:text-lg font-bold text-white">Integrated API Subscriptions</h3>
                      <div className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-xs font-medium text-blue-400">$2M–$8M</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-3">
                      Enterprise-level integration of AstroShield data products with defense and intelligence systems
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-1.5 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs text-blue-400 ml-2">Moderate</span>
                    </div>
                  </div>
                  
                  {/* Box 2: Real-Time Threat Visualizations */}
                  <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base md:text-lg font-bold text-white">Real-Time Threat Visualizations</h3>
                      <div className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-xs font-medium text-blue-400">$3M–$10M</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-3">
                      Advanced situational awareness systems with visual threat detection and response
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-1.5 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-xs text-blue-400 ml-2">Moderate</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Box 3: Multi-Agency Contracts */}
                  <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base md:text-lg font-bold text-white">Multi-Agency Contracts</h3>
                      <div className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-xs font-medium text-blue-400">$5M–$12M</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-3">
                      Expanded government contracts across DoD, intelligence agencies, and allied partners
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-1.5 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                      <span className="text-xs text-blue-400 ml-2">Moderate</span>
                    </div>
                  </div>
                  
                  {/* Box 4: Custom AI Hosting Solutions */}
                  <div className="bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base md:text-lg font-bold text-white">Custom AI Hosting Solutions</h3>
                      <div className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-xs font-medium text-blue-400">$3M–$7M</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-3">
                      Customized, secure hosting of threat detection models for classified environments
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-1.5 flex-grow bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <span className="text-xs text-blue-400 ml-2">Moderate</span>
                    </div>
                  </div>
                </div>

                {/* Reduce margin for bottom section */}
                <div className="mt-4 bg-white/5 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-2">Projected Upside Revenue:</h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-blue-400">$10M–$30M+ annually</span>
                    <span className="ml-3 text-sm text-gray-400">(Software + initial infrastructure deployment)</span>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">09</div>
                </div>
              </div>
            )}

            {/* Slide 10: Product Development Roadmap (Index 9) */}
            {currentSlide === 9 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-12 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-16">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">ROADMAP</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Product Development Roadmap (2025–2029)</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="relative w-full px-4 md:px-10">
                    <div className="absolute left-0 right-0 top-4 h-1 bg-primary/30 z-0"></div>
                    <div className="relative flex justify-between items-start text-center">
                      {/* Item 1: 2025 */}
                      <div className="flex flex-col items-center w-1/5 px-1">
                        <div className="h-8 w-8 mb-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-[#0a1929] relative z-10">
                          <span className="font-bold text-sm">25</span>
                      </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-gray-800 w-full min-h-24">
                          <h3 className="text-base font-bold text-white mb-1">2025</h3>
                          <p className="text-xs text-gray-300 leading-tight mb-1">AstroShield revenue growth, Mark 1 Coilgun validated (TRL 7)</p>
                          <div className="flex flex-wrap justify-center gap-1 mt-1">
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">ASTRO</span>
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">MARK1</span>
                      </div>
                      </div>
                    </div>
                      {/* Item 2: 2026 */}
                      <div className="flex flex-col items-center w-1/5 px-1">
                        <div className="h-8 w-8 mb-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-[#0a1929] relative z-10">
                          <span className="font-bold text-sm">26</span>
                      </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-gray-800 w-full min-h-24">
                          <h3 className="text-base font-bold text-white mb-1">2026</h3>
                          <p className="text-xs text-gray-300 leading-tight mb-1">Commercial delivery of Coilgun, Orbital Relay feasibility confirmed</p>
                          <div className="flex flex-wrap justify-center gap-1 mt-1">
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">VALID</span>
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">DELIV</span>
                      </div>
                      </div>
                    </div>
                      {/* Item 3: 2027 */}
                      <div className="flex flex-col items-center w-1/5 px-1">
                        <div className="h-8 w-8 mb-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-[#0a1929] relative z-10">
                          <span className="font-bold text-sm">27</span>
                      </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-gray-800 w-full min-h-24">
                          <h3 className="text-base font-bold text-white mb-1">2027</h3>
                          <p className="text-xs text-gray-300 leading-tight mb-1">Initial Orbital Relay development and early deployments</p>
                          <div className="flex flex-wrap justify-center gap-1 mt-1">
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">ORBITAL</span>
                      </div>
                      </div>
                    </div>
                      {/* Item 4: 2028 */}
                      <div className="flex flex-col items-center w-1/5 px-1">
                        <div className="h-8 w-8 mb-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-[#0a1929] relative z-10">
                          <span className="font-bold text-sm">28</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-gray-800 w-full min-h-24">
                          <h3 className="text-base font-bold text-white mb-1">2028</h3>
                          <p className="text-xs text-gray-300 leading-tight mb-1">Full-scale Orbital Relay demonstration and validation</p>
                          <div className="flex flex-wrap justify-center gap-1 mt-1">
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">DEMO</span>
                          </div>
                        </div>
                      </div>
                      {/* Item 5: 2029+ */}
                      <div className="flex flex-col items-center w-1/5 px-1">
                        <div className="h-8 w-8 mb-2 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-2 border-[#0a1929] relative z-10">
                          <span className="font-bold text-sm">29+</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg border border-gray-800 w-full min-h-24">
                          <h3 className="text-base font-bold text-white mb-1">2029</h3>
                          <p className="text-xs text-gray-300 leading-tight mb-1">Complete commercial operational readiness</p>
                          <div className="flex flex-wrap justify-center gap-1 mt-1">
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">DEPLOY</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-8">
                  <div className="text-sm text-gray-500">10</div>
                </div>
              </div>
            )}

            {/* Slide 11: Financial Projections (Index 10) */}
            {currentSlide === 10 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-12 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-16">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">FINANCIALS</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">Financial Projections</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center px-4 md:px-16">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="text-base font-medium text-gray-400 w-16 text-right">2025</span>
                      <Progress value={10} className="flex-1 h-6 bg-white/10" />
                      <span className="text-lg font-bold text-white w-24 text-left">$3.5M</span>
                      <span className="text-xs text-gray-400 w-32">55% gross margin</span>
                      </div>

                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="text-base font-medium text-gray-400 w-16 text-right">2026</span>
                      <Progress value={30} className="flex-1 h-6 bg-white/10" />
                      <span className="text-lg font-bold text-white w-24 text-left">$10M</span>
                      <span className="text-xs text-gray-400 w-32">62% gross margin</span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="text-base font-medium text-gray-400 w-16 text-right">2027</span>
                      <Progress value={50} className="flex-1 h-6 bg-white/10" />
                      <span className="text-lg font-bold text-white w-24 text-left">$20M</span>
                      <span className="text-xs text-gray-400 w-32">67% gross margin</span>
                      </div>

                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="text-base font-medium text-gray-400 w-16 text-right">2028</span>
                      <Progress value={70} className="flex-1 h-6 bg-white/10" />
                      <span className="text-lg font-bold text-white w-24 text-left">$30M+</span>
                      <span className="text-xs text-gray-400 w-32">73% gross margin</span>
                    </div>
                    </div>

                  <div className="flex flex-col items-center mt-6 space-y-2">
                    <div className="bg-white/5 p-4 rounded-lg w-full max-w-md border border-gray-800">
                      <h3 className="text-lg font-bold text-white mb-2 text-center">Revenue Breakdown by Category</h3>
                      <div className="flex justify-between text-sm text-gray-300">
                        <div>Software Services: <span className="text-primary font-medium">35%</span></div>
                        <div>Licensing: <span className="text-primary font-medium">30%</span></div>
                        <div>Hardware: <span className="text-primary font-medium">35%</span></div>
                      </div>
                    </div>
                  </div>
                    </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">11</div>
                      </div>
                    </div>
            )}

            {/* Slide 12: Government & Institutional Validation (Index 11, formerly 12) */}
            {currentSlide === 11 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">GOVERNMENT VALIDATION</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-white flex items-center">
                    <Lock className="h-6 w-6 text-primary mr-2" /> Institutional Support
                  </h2>
                </div>
                
                {/* Apply h-full to ensure cards stretch */}
                <div className="flex flex-col md:flex-row gap-6 items-stretch mb-8"> {/* Changed items-center to items-stretch */}
                  <div className="flex-1 bg-white/5 p-6 rounded-lg border border-gray-800 flex flex-col h-full"> {/* Added flex flex-col h-full */}
                    <div className="flex justify-center mb-6">
                      <Image src="/dod_seal.png" alt="Department of Defense" width={120} height={120} className="rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-3">Department of Defense</h3>
                    <ul className="text-sm text-gray-300 space-y-2 flex-grow"> {/* Added flex-grow */}
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>3 proposals shortlisted for rapid acquisition pathways</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Featured in Director of Land Armament's strategic materials</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Aligned with defense priorities for rapid space access</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white/5 p-6 rounded-lg border border-gray-800 flex flex-col h-full"> {/* Added flex flex-col h-full */}
                    <div className="flex justify-center mb-6">
                      <Image src="/space force.png" alt="US Space Force" width={120} height={120} className="rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-3">US Space Force / SDA</h3>
                    <ul className="text-sm text-gray-300 space-y-2 flex-grow"> {/* Added flex-grow */}
                       <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Confirmed TPOC for Direct-to-Phase II SBIR proposal</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Support letter commitment from senior leadership</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Invited to present at classified space defense forum</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-white/5 p-6 rounded-lg border border-gray-800 flex flex-col h-full"> {/* Added flex flex-col h-full */}
                    <div className="flex justify-center mb-6">
                      <Image src="/nsf.png" alt="National Science Foundation" width={120} height={120} className="rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-3">National Science Foundation</h3>
                    <ul className="text-sm text-gray-300 space-y-2 flex-grow"> {/* Added flex-grow */}
                       <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>SBIR Phase I proposal submitted via Alientt</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Received exceptional 91% technical score</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Positioned for non-dilutive funding path</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                 {/* ... bottom validation text ... */}
                 <div className="bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 p-4 rounded-lg border border-primary/30 max-w-3xl mx-auto text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Strategic Institutional Validation</h3>
                  <p className="text-gray-300">Our technology addresses critical national security needs with validation from the highest levels of government defense and scientific institutions.</p>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">12</div>
                </div>
              </div>
            )}

            {/* Slide 13: Funding Ask (Index 12, formerly 13) */}
            {currentSlide === 12 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">FUNDING REQUEST</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">Total Ask: $10M</h2>
                </div>

                {/* Funding Layout */}
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-full max-w-3xl bg-white/5 rounded-xl border border-gray-800 p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Left Column: Items */}
                      <div className="md:col-span-2">
                        <ul className="space-y-3 text-sm">
                          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <div>
                              <span className="text-gray-300">AstroShield Revenue Expansion</span>
                              <div className="text-xs text-gray-500">Immediate revenue growth</div>
                      </div>
                            <span className="text-base font-bold text-primary">$2.5M</span>
                          </li>
                          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <div>
                              <span className="text-gray-300">Mark 1 Coilgun Prototype Validation</span>
                              <div className="text-xs text-gray-500">TRL 7 by Q4 2025</div>
                    </div>
                            <span className="text-base font-bold text-primary">$6.0M</span>
                          </li>
                          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <div>
                              <span className="text-gray-300">Orbital Relay Initial Feasibility Study</span>
                              <div className="text-xs text-gray-500">TRL 5 milestone</div>
                            </div>
                            <span className="text-base font-bold text-primary">$0.5M</span>
                          </li>
                          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <div>
                              <span className="text-gray-300">Operational Costs & Overhead</span>
                              <div className="text-xs text-gray-500">24-month runway</div>
                            </div>
                            <span className="text-base font-bold text-primary">$1.0M</span>
                          </li>
                        </ul>
                  </div>

                      {/* Right Column: Total */}
                      <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg border border-primary/30">
                        <span className="text-sm font-medium text-primary mb-1">TOTAL</span>
                        <span className="text-2xl font-bold text-white">$10M</span>
                        <span className="text-xs text-gray-300 mt-1">strategic 24-month runway</span>
                  </div>
                </div>

                    <div className="mt-4 text-xs text-gray-300 text-center">
                      Funding will ensure strategic milestone achievement, operational stability, and immediate revenue scaling.
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">13</div>
                </div>
              </div>
            )}

            {/* Slide 14: Team (Index 13, formerly 15) - Rebuilt with new bios and layout */}
            {currentSlide === 13 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>
                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">TEAM</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Meet the Team</h2>
                </div>
                
                {/* Team Section with 5 members */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start justify-center mt-6">
                  {/* Jack Al-Kahwati */}
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center h-full">
                    <Image src="/face_jack.png" alt="Jack Al-Kahwati" width={100} height={100} className="rounded-full object-cover border-2 border-primary mb-4 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                    <h3 className="text-lg font-bold text-white">Jack Al-Kahwati</h3>
                    <p className="text-sm text-primary font-medium mb-3">CEO</p>
                    <p className="text-xs text-gray-300 flex-grow">20+ years in aerospace engineering & tech leadership. Former CEO of Lattis, led teams at Boeing, BAE Systems, Sikorsky. MS Aerospace Eng (UF). Multiple hardware patents.</p>
                  </div>
                  
                  {/* Gerardo Barroeta */}
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center h-full">
                    <Image src="/face_gerardo.png" alt="Gerardo Barroeta" width={100} height={100} className="rounded-full object-cover border-2 border-primary mb-4 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">Gerardo Barroeta</h3>
                    <p className="text-sm text-primary font-medium mb-3">CTO</p>
                    <p className="text-xs text-gray-300 flex-grow">MS Electrical Eng (MIT). Led hardware teams at Juul Labs, BrewBird, Juicero, Jawbone, Swift Navigation. Expertise in IoT, sensors, product development. Multiple hardware/sensing patents.</p>
                  </div>

                  {/* Steve Hong */}
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center h-full">
                    <Image src="/face_steve.png" alt="Steve Hong" width={100} height={100} className="rounded-full object-cover border-2 border-primary mb-4 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">Steve Hong</h3>
                    <p className="text-sm text-primary font-medium mb-3">Lead Mechanical Engineer</p>
                    <p className="text-xs text-gray-300 flex-grow">Mechanical Design at Boeing & NASA. MS Mechanical Eng (USF). BS Mechanical Eng (USF).</p>
                  </div>
                  
                  {/* Mian Hussain */}
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center h-full">
                    <Image src="/face_mian.png" alt="Mian Hussain" width={100} height={100} className="rounded-full object-cover border-2 border-primary mb-4 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">Mian Hussain</h3>
                    <p className="text-sm text-primary font-medium mb-3">Lead Systems Engineer</p>
                    <p className="text-xs text-gray-300 flex-grow">Performance Engineer at Boeing. BS Mechanical Eng (Virginia Tech). MS Mechanical Eng (Virginia Tech). MBA (Yale).</p>
                  </div>

                  {/* Nino Marcantonio */}
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center h-full">
                    <Image src="/face_nino.png" alt="Nino Marcantonio" width={100} height={100} className="rounded-full object-cover border-2 border-primary mb-4 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">Nino Marcantonio</h3>
                    <p className="text-sm text-primary font-medium mb-3">Advisor</p>
                    <p className="text-xs text-gray-300 flex-grow">Expert in defense tech innovation. Former Deputy Director, Defense Technology Innovation Program. Director, Defense Logistics Innovation Forum. Facilitates DoD partnerships.</p>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">14</div>
                </div>
              </div>
            )}

            {/* Slide 15: Contact Page (Index 14, formerly 16) */}
            {currentSlide === 14 && (
              <div className="h-full w-full flex flex-col p-4 md:p-6 lg:p-10 relative z-10 overflow-y-auto">
                <div className="relative flex items-center mb-4 md:mb-8">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-bold text-white tracking-wider">STARDRIVE</span>
                </div>

                <div className="mt-12">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30 mb-2">
                    <span className="text-sm font-medium text-primary">INVESTMENT OPPORTUNITY</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Join Us in Redefining Space Access</h2>
                </div>

                <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-12">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">The Next Investment Frontier</h3>
                    
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                        <p className="text-gray-300">$10M Series A for 18-month runway to Mark 1 prototype</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <Award className="h-3 w-3 text-primary" />
                      </div>
                        <p className="text-gray-300">Strategic government partnerships and high-value LOIs</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <Rocket className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-gray-300">6.2 km/s launch capability exceeds traditional systems by 300%</p>
                      </li>
                    </ul>
                    </div>

                  <div className="md:w-1/2 bg-white/5 p-6 rounded-lg border border-primary/30">
                    <div className="text-center mb-6">
                      <div className="mb-4 h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Jack Al-Kahwati</h3>
                      <p className="text-sm text-gray-400">CEO & Founder</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <a href="mailto:jack@thestardrive.com" className="text-white hover:text-primary transition-colors">
                          jack@thestardrive.com
                        </a>
                      </div>
                      
                      <div className="flex justify-center mt-4">
                        <a 
                          href="https://calendly.com/jackalkahwati/meeting" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 h-auto text-sm rounded-md">
                            Schedule Investment Discussion
                          </Button>
                        </a>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="text-sm text-gray-500">15</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation controls - Updated for better mobile experience */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 bg-[#0a1929] border-t border-[#1e3a5f] print:hidden gap-2">
          {/* Prev/Next buttons for all screen sizes */}
          <div className="flex items-center gap-2 order-1 sm:order-none">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <span className="text-sm font-medium text-gray-300">
              {currentSlide + 1} / {totalSlides}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Full navigation visible only on sm and up */}
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentSlide(0)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Title
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(1)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Summary
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(4)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Solution
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(7)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Revenue
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(12)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Funding
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(13)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Team
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(14)}
              className="border-gray-700 bg-[#0f2942] hover:bg-[#1a3b5f] text-gray-300"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

