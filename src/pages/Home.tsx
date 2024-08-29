import React from 'react';
import { useGameApi } from '../hooks/useGameApi';
import { GameEntity } from '../models/Game';

const HomePage: React.FC = () => {
  const { games, loading, error } = useGameApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <a href={`/game/${game.id}`}>{game.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
