"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingBag, Menu, ChevronDown } from "lucide-react"

export function Navbar() {
    return (
        <div className="fixed top-0 z-50 w-full flex flex-col shadow-md">
            {/* Top Banner */}
            <div className="w-full bg-[#CCFF00] py-2 text-center">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-black">
                    25% OFF SELECTED PRODUCTS
                </p>
            </div>

            {/* Main Navbar */}
            <div className="w-full bg-[#111111] px-6 py-5 text-white">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between">

                    {/* Left Links (Desktop) */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-[#CCFF00]">Store</Link>
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-[#CCFF00]">Collections</Link>
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-[#CCFF00]">Games</Link>
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-[#CCFF00]">Events</Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="flex items-center md:hidden">
                        <button><Menu className="h-5 w-5" /></button>
                    </div>

                    {/* Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-2xl font-black italic tracking-tighter text-[#CCFF00]">
                            LT
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <div className="hidden items-center gap-1 md:flex">
                            <span className="text-[10px] font-bold uppercase tracking-wider">IDR</span>
                            <ChevronDown className="h-3 w-3" />
                        </div>
                        <Link href="#" className="hidden text-[10px] font-bold uppercase tracking-wider hover:text-[#CCFF00] md:block">Support</Link>
                        <button><Search className="h-4 w-4 hover:text-[#CCFF00]" /></button>
                        <Link href="/login" className="text-[10px] font-bold uppercase tracking-wider hover:text-[#CCFF00]">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
