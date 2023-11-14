import Link from "next/link";
import Game from "@/types/Game";
import { getGames } from "@/services/games";

export default async function PostsPage() {
  const posts: Game[] = await getGames();

  return (
    <>
      {/* <header className="flex items-center mb-6">
        <h1>Posts Page</h1>
        <Link href="/posts/new" className="btn ml-auto">
          New Post
        </Link>
      </header> */}

      <ul className="grid grid-cols-3 gap-3">
        {posts.map((game) => (
          <li key={game.id}>
            {" "}
            {game.id} - {game.date}
          </li>
        ))}
      </ul>
    </>
  );
}
