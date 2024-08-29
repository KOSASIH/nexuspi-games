import React from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../types/Game';
import GameCard from '../components/GameCard';

interface GameDetailProps {
  games: Game[];
}

const GameDetail: React.FC<GameDetailProps> = ({ games }) => {
  const { id } = useParams();
  const game = games.find((game) => game.id === parseInt(id, 10));

  if (!game) {
    return <h1>Game not found</h1>;
  }

  return (
    <div className="game-detail">
      <GameCard game={game} />
      <h2>Game Description</h2>
      <p>{game.description}</p>
    </div>
  );
};

export default GameDetail;
