"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, X, TrendingDown, TrendingUp, BarChart3 } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/sections/header"

export default function AnalyzePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
                      className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)]"
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
                {/* Header with close button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-purple-500" />
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">Trading Analysis</h2>
                      <Badge className="bg-purple-600/30 text-purple-400 border-purple-500 mt-1">
                        {analysis.timeframe}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetUpload}
                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <p className="text-white/70 text-sm">Graph with input line</p>

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
                    } text-white px-12 py-6 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] min-w-[200px]`}
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
