import { LoginForm } from "@/components/login-form"
import { Hexagon, Gamepad2, Trophy, Zap } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full grid lg:grid-cols-2">
            {/* Left Side - Branding (LT) */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-[#CCFF00] relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                {/* Centered Logo */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-40 h-40 bg-black flex items-center justify-center -skew-x-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
                        <span className="font-black text-[#CCFF00] skew-x-12 text-7xl italic tracking-tighter">LT</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-neutral-50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Mobile Header (Visible only on small screens) */}
                <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-black flex items-center justify-center skew-x-[-12deg]">
                        <span className="font-black text-[#CCFF00] skew-x-[12deg] text-sm">LT</span>
                    </div>
                </div>

                <div className="w-full max-w-md relative z-10">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
