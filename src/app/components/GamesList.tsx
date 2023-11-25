"use client";
import { getGamesDynamic } from "@/services/games.client";
import Game from "@/types/Game";
import { useState } from "react";

export default function GamesList() {
  const g: Game[] = [];
  const [games, setGames] = useState(g);

  return (
    <>
      {games.length > 0 && (
        <ul className="grid grid-cols-3 gap-3">
          {games.map((game) => (
            <li key={game.id}>
              {" "}
              {game.id} - {game.date}
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={click}>fetch!</button>
    </>
  );
}

async function click() {
  const games: Game[] = await getGamesDynamic();
}
