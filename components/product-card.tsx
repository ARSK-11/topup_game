import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface GameCardProps {
    id: string
    name: string
    logo: string
    developer: string
}

export function ProductCard({
    id,
    name,
    logo,
    developer,
}: GameCardProps) {
    return (
        <Link href={`/game/${id}`} className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1">

            {/* Image Container - FULL BRIGHTNESS */}
            <div className="relative h-full w-full bg-neutral-100">
                <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />

                {/* Gloss Effect (Subtle sheen) */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Text Protection Gradient (Only at bottom) */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#000] via-black/50 to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <span className="mb-2 inline-block bg-[#CCFF00] px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md">
                        TOP SELLER
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-1 drop-shadow-md">
                        {name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                        {developer}
                    </p>
                </div>

                {/* Action Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00] text-black shadow-lg">
                        <ArrowRight className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
