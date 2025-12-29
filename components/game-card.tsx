
import { GameData } from "@/lib/games"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { StarIcon } from "lucide-react"

interface GameCardProps {
    game: GameData
}

export function GameCard({ game }: GameCardProps) {
    return (
        <Card className="overflow-hidden bg-slate-900 border-slate-800 hover:border-blue-500 transition-all duration-300 group cursor-pointer hover:-translate-y-1 h-full flex flex-col">
            <CardHeader className="p-0">
                <div className="w-full relative">
                    <AspectRatio ratio={16 / 9}>
                        {/* Fallback or Banner if valid, but Logo is safer for a card usually if banner is too wide. 
                 Let's use Banner for visual appeal if available, or just a styled container with Logo. 
                 Actually, the design often shows a square-ish or portrait card.
                 Let's use the Banner as the cover image. 
             */}
                        <Image
                            src={game.banner || game.logo}
                            alt={game.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-slate-800 shadow-lg">
                                <Image src={game.logo} alt={game.name} fill className="object-cover" />
                            </div>
                            <div className="text-white">
                                <h3 className="font-bold text-sm line-clamp-1">{game.name}</h3>
                                <p className="text-xs text-slate-400 line-clamp-1">{game.developer}</p>
                            </div>
                        </div>
                    </AspectRatio>
                </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                        <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {game.rating}
                    </span>
                    <span>{game.category}</span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">{game.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Top Up
                </Button>
            </CardFooter>
        </Card>
    )
}
