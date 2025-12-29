import Link from "next/link"
import { Hexagon, Twitter, Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t-2 border-black bg-black pt-12 pb-8 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="bg-white p-1.5 transition-transform group-hover:rotate-180 duration-500">
                                <Hexagon className="h-6 w-6 text-black fill-current" strokeWidth={1.5} />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase text-white">Top Up Game</span>
                        </Link>
                        <p className="text-sm font-medium text-neutral-400 max-w-sm leading-relaxed">
                            The fastest, most secure way to top up your favorite games.
                            Official distributor with instant delivery and 24/7 support.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center border-2 border-white/20 hover:border-[#CCFF00] hover:bg-[#CCFF00] transition-colors rounded-none group">
                                    <Icon className="h-5 w-5 text-white group-hover:text-black" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white">Support</h4>
                        <ul className="space-y-3">
                            {["Help Center", "Payment Methods", "Order Tracking", "Refund Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm font-bold text-neutral-400 hover:text-[#CCFF00] hover:underline decoration-2 underline-offset-4 decoration-[#CCFF00] transition-all">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white">Company</h4>
                        <ul className="space-y-3">
                            {["About Us", "Contact", "Terms of Service", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm font-bold text-neutral-400 hover:text-[#CCFF00] hover:underline decoration-2 underline-offset-4 decoration-[#CCFF00] transition-all">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                        © 2025 Top Up Game. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">SECURE PAYMENT</span>
                        <div className="flex gap-2">
                            {/* Payment Logos Placeholders - Dark Mode friendly */}
                            <div className="h-6 w-10 bg-neutral-800 border border-white/10" />
                            <div className="h-6 w-10 bg-neutral-800 border border-white/10" />
                            <div className="h-6 w-10 bg-neutral-800 border border-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
