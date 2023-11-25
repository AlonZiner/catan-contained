import Link from "next/link";
import Game from "@/types/Game";
import { getGames } from "@/services/games";
import GamesList from "./components/GamesList";

export default async function PostsPage() {
  const games: Game[] = await getGames();

  return (
    <>
      {/* <header className="flex items-center mb-6">
        <h1>Posts Page</h1>
        <Link href="/posts/new" className="btn ml-auto">
          New Post
        </Link>
      </header> */}

      <ul className="grid grid-cols-3 gap-3">
        {games.map((game) => (
          <li key={game.id}>
            {" "}
            {game.id} - {game.date}
          </li>
        ))}
      </ul>
      <p>Dynamic</p>
      <GamesList/>
    </>
  );
}
