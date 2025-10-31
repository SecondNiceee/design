import Image from "next/image"

export const PowerfullSection = () => {
    return (
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
                    Price Action
                    <br />
                    Analysis
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
    )
}