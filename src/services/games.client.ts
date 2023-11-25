import Game from "@/types/Game";

export async function getGamesDynamic() {
    const response = await fetch(`http://localhost:3000/api/games`, {
        next: { revalidate: 3 }
    })
    const data: Game[] = await response.json();
    return data;
}