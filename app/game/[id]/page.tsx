import { Navbar } from "@/components/navbar"
import { TopUpForm } from "@/components/topup-form"
import gamesData from "@/data/games.json"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function GamePage({ params }: PageProps) {
    const { id } = await params
    const game = gamesData.find((g) => g.id === id)

    if (!game) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white pt-32">
            <Navbar />
            <div className="mx-auto max-w-[1400px]">
                <TopUpForm game={game} />
            </div>
        </main>
    )
}
