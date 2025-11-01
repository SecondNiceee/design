"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/sections/header"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

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
  const [focusedInput, setFocusedInput] = useState(false)

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
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5F0BE8]/20 to-[#6D1D7D]/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#6D1D7D]/20 to-[#5F0BE8]/10 rounded-full blur-3xl -ml-40 -mb-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Background images with reduced opacity */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-10">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#6D1D7D]/30 to-[#5F0BE8]/30 border border-[#5F0BE8]/50">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9D5FFF] to-[#5F0BE8]">
                Quick & Secure Registration
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Start Trading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D5FFF] to-[#5F0BE8]">Today</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto text-balance">
              Join thousands of traders. Complete registration in just 3 simple steps with our trusted broker partners.
            </p>
          </div>

          <div className="mb-12 lg:mb-14 flex justify-center">
            <div className="inline-flex gap-2 p-2 rounded-2xl bg-gradient-to-br from-[#6D1D7D]/20 to-[#5F0BE8]/20 border border-[#5F0BE8]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(95,11,232,0.2)]">
              {(["quotex", "pocketoption"] as const).map((platform) => (
                <button
                  key={platform}
                  onClick={() => handlePlatformChange(platform)}
                  className={`relative px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 overflow-hidden group ${
                    activePlatform === platform ? "text-white" : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {activePlatform === platform && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-xl -z-10 animate-pulse" />
                  )}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 -z-10 ${activePlatform === platform ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] shadow-[0_0_20px_rgba(95,11,232,0.6)]" : ""}`}
                  />
                  <span className="relative z-10">{platform === "quotex" ? "Quotex" : "PocketOption"}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions Card with Carousel Animation */}
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-8 sm:p-10 lg:p-12 rounded-3xl mb-10 lg:mb-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6D1D7D]/5 to-[#5F0BE8]/5 rounded-3xl" />

            <div
              className={`relative transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                Quick Setup{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D5FFF] to-[#5F0BE8]">
                  Guide
                </span>
              </h2>

              {/* Steps */}
              <div className="space-y-4">
                {currentData.steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group relative flex items-start gap-4 p-6 sm:p-7 rounded-2xl border-2 border-[#6D1D7D]/40 bg-gradient-to-br from-[#6D1D7D]/15 to-[#5F0BE8]/5 hover:from-[#6D1D7D]/25 hover:to-[#5F0BE8]/15 transition-all duration-300 hover:border-[#5F0BE8]/60 hover:shadow-[0_0_30px_rgba(95,11,232,0.2)]"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                      opacity: 0,
                    }}
                  >
                    {/* Number circle with gradient */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(95,11,232,0.4)] group-hover:shadow-[0_0_30px_rgba(95,11,232,0.6)] transition-all">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>

                    {/* Text with better spacing */}
                    <div className="flex-1 pt-1">
                      <p className="text-white text-lg sm:text-lg font-medium leading-relaxed">{step.text}</p>
                    </div>

                    {/* Checkmark icon for completed steps visual */}
                    <CheckCircle2 className="w-6 h-6 text-[#5F0BE8]/40 group-hover:text-[#5F0BE8]/80 transition-colors flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Registration Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center">
              <a href={currentData.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button
                  className="registration-button group relative flex items-center justify-between overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(95,11,232,0.8)] active:scale-95 rounded-full"
                  style={{ height: "fit-content" }}
                >
                  {/* Enhanced gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-full" />
                  <div className="absolute inset-0 rounded-full border border-white/40 group-hover:border-white/60 transition-colors" />

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-pulse" />

                  {/* Text */}
                  <span className="registration-text relative z-10 flex-1 text-center text-lg sm:text-xl font-bold text-white px-10 sm:px-16 py-4 sm:py-5">
                    Registration
                  </span>

                  {/* Icon circle on the right */}
                  <div className="icon-circle relative z-10 flex items-center justify-center rounded-full bg-white w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 mr-1 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all">
                    <Image src="/icons/key.svg" alt="Key" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </button>
              </a>
            </div>

            {/* Info text with better styling */}
            <p className="text-center text-white/70 text-base font-medium">
              Already have an account? Enter your ID below
            </p>

            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Enter Your Account ID"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  onFocus={() => setFocusedInput(true)}
                  onBlur={() => setFocusedInput(false)}
                  className={`w-full px-7 py-4 rounded-full bg-gradient-to-br from-[#1a0f2e]/80 to-[#2d1b4e]/60 border-2 text-white placeholder-white/40 focus:outline-none transition-all duration-300 font-medium text-base ${
                    focusedInput
                      ? "border-[#5F0BE8] shadow-[0_0_30px_rgba(95,11,232,0.3)] bg-[#1a0f2e]"
                      : "border-[#5F0BE8]/40 hover:border-[#5F0BE8]/60"
                  }`}
                />
              </div>
              <button
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white hover:shadow-[0_0_40px_rgba(95,11,232,0.6)] active:scale-95 flex items-center justify-center transition-all font-bold shadow-[0_0_20px_rgba(95,11,232,0.4)] hover:from-[#7D2D8D] hover:to-[#6F1BF8]"
                aria-label="Submit account ID"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
