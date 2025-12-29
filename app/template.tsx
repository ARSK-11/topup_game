"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef(null)
    const greenCurtainRef = useRef(null)
    const blackCurtainRef = useRef(null)
    const textRef = useRef(null)
    const pathname = usePathname()

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } })

        // Reset state
        gsap.set([greenCurtainRef.current, blackCurtainRef.current], { yPercent: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
        gsap.set(textRef.current, { opacity: 1, scale: 1 })

        // ANIMATION SEQUENCE
        // 1. Text Zoom Effect (Zoom through the logo)
        tl.to(textRef.current, {
            scale: 10,
            opacity: 0,
            duration: 0.8,
            ease: "expo.in"
        })

            // 2. Curtain Reveal (Green then Black)
            .to([greenCurtainRef.current, blackCurtainRef.current], {
                yPercent: -100,
                duration: 1.2,
                stagger: 0.1, // Black follows Green slightly delayed
                borderBottomLeftRadius: 100, // Dynamic curvature
                borderBottomRightRadius: 100,
            }, "-=0.4") // Overlap with text zoom

    }, { scope: containerRef, dependencies: [pathname] })

    return (
        <div ref={containerRef} className="relative">
            {/* 1. GREEN CURTAIN (Topmost) */}
            <div
                ref={greenCurtainRef}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#CCFF00] pointer-events-none"
            >
                <h1 ref={textRef} className="text-9xl font-black italic tracking-tighter text-black">
                    LT
                </h1>
            </div>

            {/* 2. BLACK CURTAIN (Behind Green) */}
            <div
                ref={blackCurtainRef}
                className="fixed inset-0 z-[90] bg-black pointer-events-none"
            />

            {/* PAGE CONTENT */}
            {children}
        </div>
    )
}
