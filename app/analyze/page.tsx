"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X, TrendingDown, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/sections/header"

export default function AnalyzePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadContainerRef = useRef<HTMLDivElement>(null)

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith("image/")) {
        const file = items[i].getAsFile()
        if (file) handleFileSelect(file)
      }
    }
  }

  const resetUpload = () => {
    setUploadedImage(null)
  }

  // Mock analysis data
  const analysis = {
    recommendation: "SELL",
    confidence: 88,
    timeframe: "1min",
    text: `Based on comprehensive technical analysis of the provided chart, our AI has identified several key patterns and indicators suggesting a strong SELL signal. The price action shows clear bearish divergence on the RSI indicator, while the MACD has crossed below the signal line, confirming downward momentum.

The current price is testing a significant resistance level at the upper Bollinger Band, which has historically acted as a strong rejection zone. Volume analysis indicates decreasing buying pressure, with selling volume increasing on recent candles.

Key support levels have been identified at 48,991 and 44,870, which could serve as potential take-profit targets. The recommended stop-loss should be placed above the recent high at 70,111 to manage risk effectively.

Market structure analysis reveals a potential head and shoulders pattern forming, which typically precedes a bearish reversal. The confluence of multiple technical indicators at this juncture provides high confidence in the SELL recommendation.

Entry Point: Current market price
Stop Loss: 70,111
Take Profit 1: 48,991
Take Profit 2: 44,870
Risk/Reward Ratio: 1:2.5`,
  }

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
        <div className="mx-auto max-w-4xl">
          {!uploadedImage ? (
            // Upload state
            <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem]">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    For<span className="text-purple-500">Matrix</span> Turbo
                  </h1>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    High-speed binary options strategy with AI-powered pattern recognition for rapid signals with 1-5
                    minute expiration times
                  </p>
                </div>

                {/* Info section */}
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold text-lg">i</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Chart Analysis Information</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Upload your charts for AI-powered technical analysis, pattern recognition, and trade
                      recommendations based on proven trading strategies scalp trading
                    </p>
                  </div>
                </div>

                {/* Upload area */}
                <div
                  ref={uploadContainerRef}
                  className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-colors ${
                    isDragging ? "border-purple-500 bg-purple-500/10" : "border-purple-500/50 bg-[#0a0514]/50"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onPaste={handlePaste}
                  tabIndex={0}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <Upload className="w-10 h-10 text-purple-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Upload Chart Image</h3>
                      <p className="text-white/70 text-sm">
                        Drag & drop your trading chart screenshot here, or click to browse
                      </p>
                      <p className="text-white/50 text-xs">Tip: You can also paste (Ctrl+V) a copied image!</p>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleFileSelect(file)
                      }}
                    />

                    <Button
                      size="lg"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer transition-colors"
                    >
                      Select Image
                    </Button>

                    <p className="text-white/40 text-xs">Supported formats: JPG, PNG, GIF • Max size: 5MB</p>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            // Analysis result state
            <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem]">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    {/* Icon and title section */}
                    <div className="flex items-start gap-4">
                      <svg width="32" height="32" viewBox="0 0 65 65" fill="none" className="flex-shrink-0 mt-1">
                        <path
                          d="M59.5832 59.5833H5.4165"
                          stroke="url(#paint0_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M56.875 59.5833V39.2708C56.875 38.1933 56.447 37.16 55.6851 36.3981C54.9233 35.6363 53.8899 35.2083 52.8125 35.2083H44.6875C43.6101 35.2083 42.5767 35.6363 41.8149 36.3981C41.053 37.16 40.625 38.1933 40.625 39.2708V59.5833"
                          stroke="url(#paint1_linear_31_588)"
                          strokeWidth="5.5"
                        />
                        <path
                          d="M40.625 59.5833V24.375M24.375 59.5833V13.5416C24.375 9.71204 24.375 7.79725 25.5667 6.60829C26.7529 5.41663 28.6677 5.41663 32.5 5.41663C36.3323 5.41663 38.2444 5.41663 39.4333 6.60829C40.625 7.79454 40.625 9.70933 40.625 13.5416"
                          stroke="url(#paint2_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.375 59.5833V25.7291C24.375 24.6517 23.947 23.6184 23.1851 22.8565C22.4233 22.0946 21.3899 21.6666 20.3125 21.6666H12.1875C11.1101 21.6666 10.0767 22.0946 9.31488 22.8565C8.55301 23.6184 8.125 24.6517 8.125 25.7291V43.3333M8.125 59.5833V53.4895"
                          stroke="url(#paint3_linear_31_588)"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_31_588"
                            x1="5.4165"
                            y1="60.0833"
                            x2="59.5832"
                            y2="60.0833"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_31_588"
                            x1="40.625"
                            y1="47.3958"
                            x2="56.875"
                            y2="47.3958"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_31_588"
                            x1="24.375"
                            y1="32.5"
                            x2="40.625"
                            y2="32.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_31_588"
                            x1="8.125"
                            y1="40.625"
                            x2="24.375"
                            y2="40.625"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6D1D7D" />
                            <stop offset="1" stopColor="#5F0BE8" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">Trading Analysis</h2>
                          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] bg-clip-text text-transparent">
                            1min
                          </span>
                        </div>
                        <div className="h-1 mt-2 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Right side: close button */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={resetUpload}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0 cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <p className="text-white/70 text-sm sm:text-base lg:text-lg">Graph with input line</p>

                {/* Uploaded chart image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                  <Image
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded trading chart"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-white/50 text-xs py-2 bg-black/30">
                    💡 Click on the image to view full size
                  </p>
                </div>

                {/* Recommendation button */}
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className={`${
                      analysis.recommendation === "SELL"
                        ? "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                        : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    } text-white px-12 py-6 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] min-w-[200px] cursor-pointer transition-colors`}
                  >
                    {analysis.recommendation === "SELL" ? (
                      <TrendingDown className="w-6 h-6 mr-2" />
                    ) : (
                      <TrendingUp className="w-6 h-6 mr-2" />
                    )}
                    {analysis.recommendation}
                  </Button>
                </div>

                {/* Confidence */}
                <div className="text-center">
                  <p className="text-white/70 text-lg">
                    Confluence: <span className="text-purple-400 font-bold text-2xl">{analysis.confidence}%</span>
                  </p>
                </div>

                {/* Analysis text */}
                <div className="bg-[#0a0514]/50 rounded-2xl p-6 border border-purple-500/20">
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{analysis.text}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
