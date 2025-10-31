import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div 
      className="relative min-h-screen overflow-hidden" 
      style={{ background: 'var(--back, linear-gradient(315deg, #0A090C 0.38%, #1A092D 99.62%))' }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Background image container - full width, covers header and hero */}
        <div className="absolute inset-x-0 top-0 h-[800px]  z-0 overflow-hidden">
          <img
            src="/trading-image.png"
            alt="Trading chart background"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Gradient overlay for smooth transition to background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10, 9, 12, 0.3) 60%, rgba(26, 9, 45, 0.6) 80%, rgba(10, 9, 12, 0.95) 95%, rgba(10, 9, 12, 1) 100%)'
            }}
          />
        </div>
        
        {/* Header */}
        <header className="relative z-10 px-8 py-6 lg:px-16">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="ForMatrix Logo"
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold text-white lg:text-3xl">
                For<span className="text-[#8b5cf6]">Matrix</span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-base text-white hover:bg-white/10 hover:text-white">
                Login
              </Button>
              <Button className="bg-[#8b5cf6] text-base text-white hover:bg-[#7c3aed]">Sign Up</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="relative px-8 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="max-w-2xl">
              <div className="rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-8 shadow-[0_0_40px_rgba(95,11,232,0.3)] backdrop-blur-xl lg:p-12">
                <h2
                  className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
                  style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                >
                  Trade like a{" "}
                  <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                    Pro
                  </span>
                  <br />
                  without the{" "}
                  <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                    guru
                  </span>
                </h2>

                <p className="mb-8 text-base leading-relaxed text-gray-300 lg:text-lg">
                  AI-powered chart analysis that delivers actionable trade plans. Upload your charts and get instant
                  insights for better trading decisions.
                </p>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#8b44c7] via-[#7c3aed] to-[#4f46e5] px-8 py-6 text-lg font-semibold text-white hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4338ca]"
                >
                  Analyze a Chart
                </Button>
              </div>
            </div>
          </div>

          <section className="mx-auto mt-24 max-w-7xl lg:mt-32">
            <div className="text-center">
              <h2 className="mb-2 text-4xl font-bold text-white lg:text-5xl">How It Works</h2>
              <div className="mx-auto mb-4 h-1 w-64 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
              <p className="mb-16 text-lg text-gray-300">Simple, fast and powerful chart analysis in three steps</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: Upload Chart */}
              <div className="relative w-full max-w-[319px] mx-auto h-full">
                {/* Card Container */}
                <div className="relative pt-16 pb-8 px-6 rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
                  {/* Circular Icon - Positioned above the card */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15)] border border-white/35 flex items-center justify-center">
                    <img
                      src="/icons/upload.svg"
                      alt="Upload"
                      className="w-[66px] h-[75px]"
                    />
                  </div>
                  {/* Title */}
                  <h2 
                    className="text-white text-center text-[40px] font-normal leading-normal mb-6 tracking-tight"
                    style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
                  >
                    1. Upload Chart
                  </h2>
                  {/* Description */}
                  <p 
                    className="text-white/60 text-center text-2xl font-normal leading-normal flex-grow"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
                  >
                    Upload your trading chart screenshot or image from any platform
                  </p>
                </div>
              </div>

              {/* Card 2: AI Analysis */}
              <div className="relative w-full max-w-[319px] mx-auto h-full">
                {/* Card Container */}
                <div className="relative pt-16 pb-8 px-6 rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
                  {/* Circular Icon - Positioned above the card */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15)] border border-white/35 flex items-center justify-center">
                    <img
                      src="/icons/brain.svg"
                      alt="AI Analysis"
                      className="w-[66px] h-[75px]"
                    />
                  </div>
                  {/* Title */}
                  <h2 
                    className="text-white text-center text-[40px] font-normal leading-normal mb-6 tracking-tight"
                    style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
                  >
                    2. AI Analysis
                  </h2>
                  {/* Description */}
                  <p 
                    className="text-white/60 text-center text-2xl font-normal leading-normal flex-grow"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
                  >
                    Our AI analyzes patterns, levels, and market structure instantly
                  </p>
                </div>
              </div>

              {/* Card 3: Trade Plan */}
              <div className="relative w-full max-w-[319px] mx-auto h-full">
                {/* Card Container */}
                <div className="relative pt-16 pb-8 px-6 rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
                  {/* Circular Icon - Positioned above the card */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15)] border border-white/35 flex items-center justify-center">
                    <img
                      src="/icons/spiral.svg"
                      alt="Trade Plan"
                      className="w-[66px] h-[75px]"
                    />
                  </div>
                  {/* Title */}
                  <h2 
                    className="text-white text-center text-[40px] font-normal leading-normal mb-6 tracking-tight"
                    style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
                  >
                    3. Trade Plan
                  </h2>
                  {/* Description */}
                  <p 
                    className="text-white/60 text-center text-2xl font-normal leading-normal flex-grow"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
                  >
                    Get actionable insights with entry, stop loss, and take profit levels
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Powerful Features section */}
          <section className="relative mx-auto mt-24 max-w-7xl lg:mt-32">
            {/* Background image for this section */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2010-MTUANLLcPNvx8QA8J8HKxlOjYbdazz.png"
                alt="Chart background"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div className="text-center">
              <h2 className="mb-2 text-4xl font-bold text-white lg:text-5xl">Powerful Features</h2>
              <div className="mx-auto mb-4 h-1 w-80 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
              <p className="mb-16 text-lg text-gray-300">Everything you need for successful trading analysis</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* AI Trade Analysis */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/flash.svg" alt="AI Trade Analysis" className="w-8 h-8" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    AI Trade Analysis
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Advanced pattern recognition and market structure analysis
                  </p>
                </div>
              </div>

              {/* Scalp Trading */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/pulse.svg" alt="Scalp Trading" className="w-8 h-8" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    Scalp Trading
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Ultra-short term trading opportunities for quick profits
                  </p>
                </div>
              </div>

              {/* Risk Management */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/shield.svg" alt="Risk Management" className="w-8 h-8" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    Risk Management
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Advanced position sizing and risk calculation tools
                  </p>
                </div>
              </div>

              {/* Swing Trading */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/graph-arrow.svg" alt="Swing Trading" className="w-7 h-7" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    Swing Trading
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Multi-day to multi-week trading opportunities analysis
                  </p>
                </div>
              </div>

              {/* Price Action Analysis */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/graph-bars.svg" alt="Price Action Analysis" className="w-9 h-9" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    Price Action<br />Analysis
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Deep analysis of price movements and market psychology
                  </p>
                </div>
              </div>

              {/* Trade Journaling */}
              <div className="relative w-full max-w-[402px] mx-auto">
                <div className="relative rounded-[45px] bg-[#7f38f3]/15 backdrop-blur-[4.4px] min-h-[291px] shadow-[-10.04px_-9.35px_43.2px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_rgba(0,0,0,0.15),inset_1.81px_1.68px_7.78px_rgba(255,255,255,0.15),inset_0.97px_0.9px_3.89px_rgba(255,255,255,0.15)]">
                  {/* Icon Circle */}
                  <div className="absolute left-[38px] top-[54px] w-[80.1px] h-[80.1px] rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 backdrop-blur-[6.8px] flex items-center justify-center z-20 shadow-[-10.04px_-9.35px_43.2px_-10.8px_rgba(0,0,0,0.15),-1.67px_-1.56px_10.8px_-7.2px_rgba(0,0,0,0.15),inset_1.93px_1.8px_8.32px_rgba(255,255,255,0.126),inset_1.1px_1.02px_4.16px_rgba(255,255,255,0.126)]">
                    <img src="/icons/book.svg" alt="Trade Journaling" className="w-7 h-7" />
                  </div>
                  {/* Title */}
                  <h3 className="absolute left-[138px] top-[72px] w-[264px] text-white text-[32px] font-medium leading-[39px] z-20">
                    Trade Journaling
                  </h3>
                  {/* Gradient Line */}
                  <div className="absolute left-[170px] top-[120px] w-[251px] h-[7px] rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] z-20" />
                  {/* Description */}
                  <p className="absolute left-[138px] top-[145px] w-[264px] text-white/80 text-[24px] font-medium leading-[26px] z-20">
                    Track and analyze your trading performance over time
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials section */}
          <section className="mx-auto mt-24 max-w-7xl lg:mt-32">
            <div className="text-center">
              <h2 className="mb-2 text-4xl font-bold text-white lg:text-5xl">What our traders are saying</h2>
              <div className="mx-auto mb-16 h-1 w-96 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 - Roberto Lima */}
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/professional-trader-man-in-suit.jpg"
                          alt="Roberto Lima"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Roberto Lima</h3>
                    <p className="text-sm text-gray-300">
                      Day Trader • <span className="text-[#8b5cf6]">42</span> years
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "After 10 years on the market, finally find a tool that really it works. My results have improved
                    300%!"
                  </p>
                </div>
              </div>

              {/* Testimonial 2 - Isabella Alves */}
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/professional-trader-woman.jpg"
                          alt="Isabella Alves"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Isabella Alves</h3>
                    <p className="text-sm text-gray-300">
                      Swing Trader • <span className="text-[#8b5cf6]">36</span> years
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "As the mother of two children, I need fast and efficient analysis. NEXTGREEN allows me to operate
                    in the intervals of my day!"
                  </p>
                </div>
              </div>

              {/* Testimonial 3 - Carlos Eduardo */}
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/young-trader-student.jpg"
                          alt="Carlos Eduardo"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Carlos Eduardo</h3>
                    <p className="text-sm text-gray-300">
                      Scalper • <span className="text-[#8b5cf6]">23</span> years old
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "Economics student who does trading to pay for college. With the NEXTGREEN, I can be consistent in
                    operations!"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
