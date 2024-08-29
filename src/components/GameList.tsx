import React, { useState, useEffect } from 'react';
import { Game } from '../types/Game';
import GameCard from './GameCard';

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGames(filteredGames);
  }, [searchQuery, games]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="game-list">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search games"
      />
      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
