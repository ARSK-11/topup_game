"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Check, Eye, EyeOff, Zap, Hexagon } from "lucide-react"

export function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [rememberMe, setRememberMe] = React.useState(false)

    return (
        <div className="w-full max-w-md bg-white border-2 border-black p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Hexagon className="w-24 h-24 stroke-1 fill-neutral-100" />
            </div>

            {/* Header */}
            <div className="mb-10 relative z-10">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
                    Welcome Back
                </h1>
                <div className="h-1.5 w-16 bg-[#CCFF00] mb-4" />
                <p className="text-neutral-500 font-medium">
                    Enter your credentials to access your dashboard.
                </p>
            </div>

            {/* Form */}
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-lg font-bold text-black placeholder:text-neutral-300 focus:outline-hidden focus:border-black transition-colors rounded-none"
                    />
                </div>

                {/* Password */}
                <div className="space-y-2 relative">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                            Password
                        </label>
                        <Link href="#" className="text-[10px] font-bold text-neutral-400 hover:text-black hover:underline underline-offset-2">
                            FORGOT PASSWORD?
                        </Link>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-lg font-bold text-black placeholder:text-neutral-300 focus:outline-hidden focus:border-black transition-colors rounded-none pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Start Checkbox & Submit */}
                <div className="pt-4 space-y-8">
                    {/* Remember Me */}
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                        <div
                            className={`w-5 h-5 border-2 border-black flex items-center justify-center transition-colors ${rememberMe ? "bg-black" : "bg-white"}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setRememberMe(!rememberMe)
                            }}
                        >
                            {rememberMe && <Check className="w-3.5 h-3.5 text-[#CCFF00] stroke-[4px]" />}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide text-neutral-600 group-hover:text-black transition-colors">Remember me</span>
                    </label>

                    {/* Rolling Button */}
                    <button
                        className="group relative w-full h-[64px] overflow-hidden bg-[#111] text-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-[#CCFF00] active:translate-y-0"
                    >
                        {/* Layer 1: Normal State */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                            <span className="text-lg font-black uppercase tracking-widest text-white">
                                SIGN IN
                            </span>
                            <ArrowRight className="h-5 w-5 text-[#CCFF00]" />
                        </div>

                        {/* Layer 2: Hover State */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                            <span className="text-lg font-black uppercase tracking-widest text-black">
                                ENTER ACCOUNT
                            </span>
                            <Zap className="h-5 w-5 text-black fill-black" />
                        </div>
                    </button>
                </div>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">
                    Don't have an account? <Link href="#" className="text-black underline underline-offset-2 hover:bg-[#CCFF00] transition-colors">Create one</Link>
                </p>
            </div>

        </div>
    )
}
