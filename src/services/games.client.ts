import Game from "@/types/Game";

export async function getGamesDynamic(): Promise<Game[]> {
    const response = await fetch(`/api/games`, {
        next: { revalidate: 3 }
    })
    const data = await response.json();
    return data.games;
}