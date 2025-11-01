"use client"

import { AuthDialog } from "@/components/auth-dialog"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-10 px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="ForMatrix Logo" className="h-8 w-auto sm:h-10 lg:h-12" />
          <span className="font-logo text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            For
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Matrix</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <AuthDialog
            defaultMode="login"
            trigger={
              <Button
                variant="ghost"
                className="text-sm sm:text-base text-white hover:bg-white/10 hover:text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full"
              >
                Login
              </Button>
            }
          />
          <AuthDialog
            defaultMode="signup"
            trigger={
              <Button className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-sm sm:text-base text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                Sign Up
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}
