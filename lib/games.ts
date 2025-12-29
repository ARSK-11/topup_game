
export interface GameData {
    packageID: string
    name: string
    version: string
    downloads: string
    lastUpdated: string
    launchDate: string
    developer: string
    description: string
    screenshots: string[]
    category: string
    logo: string
    banner: string
    privacyPolicy: string
    website: string
    supportEmail: string
    rating: string
    noOfUsersRated: string
}

const POPULAR_GAMES_IDS = [
    "com.mobile.legends",
    "com.dts.freefireth",
    "com.tencent.ig", // PUBG Mobile
    "com.miHoYo.GenshinImpact",
    "com.activision.callofduty.shooter",
    "com.supercell.clashofclans",
    "com.riotgames.league.wildrift",
    "com.roblox.client",
]

export async function fetchGameData(packageId: string): Promise<GameData | null> {
    try {
        const response = await fetch(`https://play.rajkumaar.co.in/json?id=${packageId}`)
        if (!response.ok) {
            console.error(`Failed to fetch data for ${packageId}`)
            return null
        }
        return await response.json()
    } catch (error) {
        console.error(`Error fetching game data for ${packageId}:`, error)
        return null
    }
}

export async function getPopularGames(): Promise<GameData[]> {
    const promises = POPULAR_GAMES_IDS.map((id) => fetchGameData(id))
    const results = await Promise.all(promises)
    // Filter out nulls
    return results.filter((game): game is GameData => game !== null)
}
