import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import gamesData from "@/data/games.json"

export default function Home() {
    const topGames = gamesData.filter((g) => (g as any).top)
    const moreGames = gamesData.filter((g) => !(g as any).top)

    return (
        <main className="min-h-screen bg-white pt-32">
            <Navbar />

            <section className="mx-auto max-w-[1400px] px-6 py-12">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-[#111]">
                        Top Games
                    </h1>
                    <p className="text-sm text-neutral-600">
                        Most popular games right now.
                    </p>
                </div>

                {/* Top Games Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 mb-20">
                    {topGames.map((game) => (
                        <ProductCard
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            logo={game.logo}
                            developer={game.developer}
                        />
                    ))}
                </div>

                {/* More Games Section */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-[#111]">
                        More List Game
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 border border-neutral-200 bg-[#F3F3F3] px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors hover:border-black">
                            Filter
                            <span className="flex h-5 w-5 items-center justify-center bg-white shadow-sm">
                                <SlidersHorizontal className="h-3 w-3" />
                            </span>
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Sort By: Featured</span>
                            <ChevronDown className="h-3 w-3" />
                        </div>
                    </div>
                </div>

                {/* More Games Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {moreGames.map((game) => (
                        <ProductCard
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            logo={game.logo}
                            developer={game.developer}
                        />
                    ))}
                </div>

                {/* Pagination - Keeping user's added button but making it sharp */}
                <div className="mt-8 flex items-center justify-center">
                    <button className="border border-neutral-200 bg-[#F3F3F3] px-6 py-3 text-[10px] font-bold uppercase tracking-wider transition-colors hover:border-black hover:bg-[#CCFF00]">
                        Load More
                    </button>
                </div>
            </section>
        </main>
    )
}
