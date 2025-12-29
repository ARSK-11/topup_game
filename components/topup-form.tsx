"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ShieldCheck, Zap, ArrowRight, MousePointer2, Gem, Ticket, Star, ChevronLeft, Minus } from "lucide-react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

interface Game {
    id: string
    name: string
    logo: string
    developer: string
}

const denominations = [
    { id: "weekly", name: "Weekly Pass", price: "Rp 30.000", tag: "BEST VALUE", type: "PASS" },
    { id: "twilight", name: "Twilight Pass", price: "Rp 150.000", tag: "POPULAR", type: "PASS" },
    { id: "5", name: "5 Diamonds", price: "Rp 1.500", tag: null, type: "CURRENCY" },
    { id: "10", name: "10 Diamonds", price: "Rp 3.000", tag: null, type: "CURRENCY" },
    { id: "50", name: "50 Diamonds", price: "Rp 15.000", tag: null, type: "CURRENCY" },
    { id: "100", name: "100 Diamonds", price: "Rp 30.000", tag: null, type: "CURRENCY" },
    { id: "250", name: "250 Diamonds", price: "Rp 75.000", tag: null, type: "CURRENCY" },
    { id: "500", name: "500 Diamonds", price: "Rp 150.000", tag: "BONUS", type: "CURRENCY" },
    { id: "1000", name: "1000 Diamonds", price: "Rp 300.000", tag: "BONUS", type: "CURRENCY" },
    { id: "2500", name: "2500 Diamonds", price: "Rp 750.000", tag: "MEGA", type: "CURRENCY" },
    { id: "5000", name: "5000 Diamonds", price: "Rp 1.500.000", tag: "GIGA", type: "CURRENCY" },
]

export function TopUpForm({ game }: { game: Game }) {
    const [selectedId, setSelectedId] = React.useState<string | null>(null)
    const [userId, setUserId] = React.useState("")
    const containerRef = React.useRef(null)
    const marqueeRef = React.useRef(null)
    const scrollContainerRef = useHorizontalScroll()

    const selectedItem = denominations.find((d) => d.id === selectedId)

    // GSAP Context
    const { contextSafe } = useGSAP({ scope: containerRef });

    useGSAP(() => {
        // Added delay: 1.4s to wait for the Page Transition (LT Logo) to clear
        const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 1.4 })

        // Marquee Animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear",
        });

        tl.from(".banner-content", {
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        })
            .from(".left-panel-content", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
            }, "-=0.5")
            .from(".item-card", {
                x: 100,
                opacity: 0,
                duration: 0.8,
                stagger: {
                    amount: 0.5,
                    from: "start"
                },
            }, "-=0.8")
    }, { scope: containerRef })

    React.useEffect(() => {
        if (selectedItem) {
            gsap.fromTo(".price-display",
                { scale: 1.1, color: "#CCFF00" },
                { scale: 1, color: "#111", duration: 0.4, ease: "back.out(1.7)" }
            )
        }
    }, [selectedItem])

    // Context-safe hover handlers
    const onMouseEnterCard = contextSafe((e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        // Don't animate if already selected (let selection state dominate)
        if (selectedId === id) return;

        const target = e.currentTarget;
        const icon = target.querySelector(".card-icon");

        gsap.to(target, {
            scale: 1.02,
            duration: 0.3,
            ease: "back.out(2)",
            borderColor: "#000000"
        });

        if (icon) {
            gsap.to(icon, {
                scale: 1.1,
                rotate: 5,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    });

    const onMouseLeaveCard = contextSafe((e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        if (selectedId === id) return;

        const target = e.currentTarget;
        const icon = target.querySelector(".card-icon");

        gsap.to(target, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            borderColor: "#e5e5e5" // neutral-200
        });

        if (icon) {
            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    });

    // Helper to determine visuals and colors
    const getCardColors = (item: typeof denominations[0], isSelected: boolean) => {
        // PASS TYPE
        if (item.type === "PASS") {
            if (isSelected) return {
                bg: "bg-[#CCFF00]",
                text: "text-black",
                subtext: "text-black/80",
                icon: "text-black",
                border: "border-black"
            }
            return {
                bg: "bg-black",
                text: "text-white",
                subtext: "text-neutral-400",
                icon: "text-white/40",
                border: "border-black"
            }
        }
        // CURRENCY TYPE
        if (isSelected) return {
            bg: "bg-black",
            text: "text-white",
            subtext: "text-neutral-400",
            icon: "text-[#CCFF00]",
            border: "border-black"
        }
        // Unselected Currency: SOLID WIREFRAME
        return {
            bg: "bg-white",
            text: "text-black",
            subtext: "text-neutral-500",
            icon: "text-neutral-900",
            border: "border-neutral-200"
        }
    }

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">

            {/* TOP BANNER */}
            <div className="relative w-full border-b-2 border-black bg-[#CCFF00] overflow-hidden">
                {/* Marquee */}
                <div className="flex whitespace-nowrap py-1.5 bg-black text-[#CCFF00]">
                    <div ref={marqueeRef} className="flex gap-4">
                        {Array(10).fill("OFFICIAL DISTRIBUTOR // INSTANT DELIVERY // 24/7 SUPPORT // SECURE PAYMENT //").map((text, i) => (
                            <span key={i} className="text-[10px] font-black uppercase tracking-widest">{text}</span>
                        ))}
                    </div>
                </div>

                {/* Banner Hero */}
                <div className="relative flex h-48 md:h-64 items-center overflow-hidden bg-white">
                    {/* Back Button (Commented out per user request) */}
                    {/* <div className="absolute top-6 left-6 z-20 banner-content">
                  <Link href="/" className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Back to Games</span>
                  </Link>
              </div> */}

                    {/* Stark Geometric Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

                    {/* Central Hero Content */}
                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center h-full banner-content">
                        <div className="inline-flex items-center gap-2 mb-2 p-1 bg-black text-white px-3">
                            <Star className="h-3 w-3 text-[#CCFF00] fill-current" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Featured Game</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black mix-blend-multiply opacity-10 leading-[0.8] select-none absolute right-0 bottom-[-20px] pointer-events-none">
                            {game.name}
                        </h1>
                        <div className="flex items-center gap-6">
                            <div className="relative h-24 w-24 md:h-32 md:w-32 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
                                <Image src={game.logo} alt={game.name} fill className="object-contain p-4" />
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-[0.9]">
                                    {game.name}
                                </h2>
                                <p className="font-bold tracking-widest text-neutral-500 uppercase text-sm mt-1">{game.developer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
                {/* LEFT COLUMN - STICKY DETAILS */}
                <div className="relative z-20 flex flex-col p-6 lg:col-span-5 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-32 lg:py-0">
                    <div className="left-panel-content flex flex-col gap-6 lg:gap-10">
                        {/* Simplified Header */}
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#111]">
                                Top Up Details
                            </h3>
                            <div className="h-1 w-12 bg-[#CCFF00] mt-1 mb-4" />
                            <p className="text-neutral-500 text-sm font-medium leading-relaxed">
                                Select your preferred top-up package. All transactions are secure and processed instantly. Support available 24/7.
                            </p>
                        </div>

                        {/* Price section */}
                        <div className="border-y-2 border-black py-6 bg-neutral-50 px-6 -mx-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">TOTAL AMOUNT</p>
                                {selectedItem && <span className="bg-[#CCFF00] border border-black text-black text-[10px] font-bold px-1 py-0.5">SAVED 20%</span>}
                            </div>
                            <div className="flex items-baseline gap-3">
                                <p className="price-display text-5xl font-black text-[#111] md:text-6xl tracking-tight">
                                    {selectedItem ? selectedItem.price : "Rp 0"}
                                </p>
                            </div>
                            {selectedItem && (
                                <p className="text-xs font-bold text-neutral-400 mt-1">
                                    Includes tax & fees
                                </p>
                            )}
                        </div>

                        {/* Input Section */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                                    PLAYER ID
                                </label>
                            </div>
                            <div className="group relative transition-all">
                                <input
                                    type="text"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    placeholder="ENTER YOUR ID"
                                    className="w-full border-b-4 border-neutral-300 bg-transparent py-4 text-2xl font-black text-black placeholder:text-neutral-300 focus:border-black focus:outline-hidden transition-colors tracking-widest"
                                />
                                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                    {userId.length > 4 ? (
                                        <ShieldCheck className="h-6 w-6 text-black" />
                                    ) : (
                                        <MousePointer2 className="h-5 w-5 text-neutral-300 animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Action Button - ROLLING ANIMATION WITH BG CHANGE */}
                        <div className="pt-4 mt-auto">
                            <button
                                disabled={!selectedItem || !userId}
                                className="group relative w-full h-[72px] overflow-hidden bg-[#111] text-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-[#CCFF00] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-200"
                            >
                                {/* Layer 1: Normal State (Scrolls Up on Hover) */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-enabled:group-hover:-translate-y-full">
                                    <span className="text-lg font-black uppercase tracking-widest text-white group-disabled:text-neutral-400">
                                        {selectedItem ? "CONFIRM PURCHASE" : "SELECT PACKAGE"}
                                    </span>
                                    {selectedItem && <ArrowRight className="h-5 w-5 text-[#CCFF00]" />}
                                </div>

                                {/* Layer 2: Hover State (Scrolls Up from Bottom) */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-enabled:group-hover:translate-y-0">
                                    <span className="text-lg font-black uppercase tracking-widest text-black">
                                        PURCHASE NOW
                                    </span>
                                    <Zap className="h-5 w-5 text-black fill-black" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - SCROLLABLE ITEMS */}
                <div className="relative min-h-[60vh] bg-neutral-50 lg:col-span-7 lg:min-h-screen border-l-2 border-dashed border-neutral-200">
                    {/* Mobile Section Header */}
                    <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-black bg-[#CCFF00] px-6 py-3 lg:hidden">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">SELECT PACKAGE</span>
                        <Minus className="h-4 w-4" />
                    </div>

                    {/* Scroll Container */}
                    <div ref={scrollContainerRef} className="no-scrollbar flex w-full overflow-x-auto p-6 md:p-8 lg:h-full lg:items-center lg:overflow-x-auto cursor-grab active:cursor-grabbing pb-24">
                        <div className="flex gap-8 pr-12 lg:pr-24 items-center">
                            {denominations.map((item, index) => {
                                const isSelected = selectedId === item.id
                                const colors = getCardColors(item, isSelected)

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setSelectedId(item.id)}
                                        onMouseEnter={(e) => onMouseEnterCard(e, item.id)}
                                        onMouseLeave={(e) => onMouseLeaveCard(e, item.id)}
                                        type="button"
                                        className={`item-card group relative flex min-w-[300px] max-w-[300px] shrink-0 flex-col overflow-hidden text-left transition-none ease-out border-2 box-border
                                ${colors.bg} ${colors.border}
                                ${isSelected
                                                ? "scale-100 z-10"
                                                : "scale-100 z-0"
                                            }
                            `}
                                    >
                                        {/* Tag */}
                                        {item.tag && (
                                            <div className="absolute left-0 top-6 z-20">
                                                <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-black ${isSelected ? "bg-white border-2 border-black" : "bg-[#CCFF00] border-2 border-transparent"}`}>
                                                    {item.tag}
                                                </span>
                                            </div>
                                        )}

                                        {/* Visual Area */}
                                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                                            {/* Icon Visual */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {item.type === "PASS" ? (
                                                    <Ticket className={`card-icon h-40 w-40 transition-none ${colors.icon} ${isSelected ? "rotate-12 scale-110" : "-rotate-12"}`} strokeWidth={1.5} />
                                                ) : (
                                                    item.tag ?
                                                        <Star className={`card-icon h-40 w-40 transition-none ${colors.icon} ${isSelected ? "rotate-[360deg] scale-110" : ""}`} strokeWidth={1} /> :
                                                        <Gem className={`card-icon h-32 w-32 transition-none ${colors.icon} ${isSelected ? "scale-110" : ""}`} strokeWidth={1} />
                                                )}
                                            </div>

                                            {/* Item Info Overlay */}
                                            <div className="relative h-full flex flex-col justify-end p-6 z-20">
                                                <h3 className={`text-6xl font-black uppercase tracking-tighter leading-[0.8] mb-1 italic ${colors.text}`}>
                                                    {item.name.split(" ")[0]}
                                                </h3>
                                                <div className={`h-1.5 w-12 mb-2 ${isSelected ? (item.type === "PASS" ? "bg-black" : "bg-[#CCFF00]") : "bg-[#CCFF00]"}`}></div>
                                                <span className={`text-sm font-bold uppercase tracking-widest ${colors.subtext}`}>
                                                    {item.name.replace(item.name.split(" ")[0], "")}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className={`flex w-full items-center justify-between p-5 transition-colors border-t-2
                                    ${isSelected ? "bg-[#111] border-black" : "bg-white border-black"}
                            `}>
                                            <div className="flex flex-col text-left">
                                                <span className={`text-[9px] font-black uppercase tracking-widest ${isSelected ? "text-neutral-500" : "text-neutral-400"}`}>PRICE</span>
                                                <span className={`text-xl font-black tracking-tight ${isSelected ? "text-white" : "text-[#111]"}`}>{item.price}</span>
                                            </div>

                                            {isSelected && (
                                                <div className="h-8 w-8 flex items-center justify-center bg-[#CCFF00]">
                                                    <Check className="h-5 w-5 text-black stroke-[3px]" />
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                )
                            })}
                            <div className="w-12 shrink-0 lg:w-24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
