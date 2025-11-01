"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/sections/header"
import Image from "next/image"
import { ArrowRight, Wrench } from "lucide-react"

type Platform = "quotex" | "pocketoption"

interface Step {
  number: number
  text: string
}

const platformData: Record<Platform, { label: string; link: string; steps: Step[] }> = {
  quotex: {
    label: "Quotex",
    link: "https://quotex.com/register",
    steps: [
      {
        number: 1,
        text: "Register with one of our partner brokers using the link provided.",
      },
      {
        number: 2,
        text: "Make a minimum deposit of $50 to activate your trading account.",
      },
      {
        number: 3,
        text: "After registration, please write your ID below",
      },
    ],
  },
  pocketoption: {
    label: "PocketOption",
    link: "https://pocketoption.com/register",
    steps: [
      {
        number: 1,
        text: "Register with one of our partner brokers using the link provided.",
      },
      {
        number: 2,
        text: "Make a minimum deposit of $50 to activate your trading account.",
      },
      {
        number: 3,
        text: "After registration, please write your ID below",
      },
    ],
  },
}

export default function RegisterPage() {
  const [activePlatform, setActivePlatform] = useState<Platform>("quotex")
  const [accountId, setAccountId] = useState("")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePlatformChange = (platform: Platform) => {
    if (platform !== activePlatform) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActivePlatform(platform)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const currentData = platformData[activePlatform]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient matching the main site */}
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      {/* Background chart images */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Platform Switcher */}
          <div className="flex gap-4 sm:gap-6 mb-8 lg:mb-12">
            {(["quotex", "pocketoption"] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => handlePlatformChange(platform)}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all cursor-pointer ${
                  activePlatform === platform
                    ? "bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                    : "text-white/70 border border-white/20 hover:text-white hover:border-white/40"
                }`}
              >
                {platform === "quotex" ? "Quotex" : "PocketOption"}
              </button>
            ))}
          </div>

          {/* Instructions Card with Carousel Animation */}
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2.5rem] mb-8 lg:mb-12 overflow-hidden">
            <div
              className={`transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Broker <span className="text-purple-400">Access</span> Requirements
              </h2>

              {/* Steps */}
              <div className="space-y-4 sm:space-y-5">
                {currentData.steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border-2 border-[#6D1D7D]/40 bg-[#6D1D7D]/10 hover:bg-[#6D1D7D]/15 transition-colors"
                  >
                    {/* Number circle */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-xl">{step.number}</span>
                    </div>

                    {/* Text */}
                    <p className="text-white text-sm sm:text-base pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Registration Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Registration Button */}
            <div className="flex justify-center">
              <a
                href={currentData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer"
              >
                <Button className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center gap-2 transition-colors">
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
                  Registration
                </Button>
              </a>
            </div>

            {/* Info text */}
            <p className="text-center text-white/70 text-sm sm:text-base">
              If you already have an account, enter the ID
            </p>

            {/* Account ID Input */}
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Enter Your ID"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-[#1a0f2e] border-2 border-[#5F0BE8]/50 text-white placeholder-white/40 focus:outline-none focus:border-[#5F0BE8] focus:bg-[#1a0f2e]/70 transition-colors text-sm sm:text-base"
              />
              <button
                className="px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] flex items-center justify-center transition-colors cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                aria-label="Submit account ID"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
