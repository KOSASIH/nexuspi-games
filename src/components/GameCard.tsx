import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types/Game';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <Link to={`/games/${game.id}`}>View Game</Link>
    </div>
  );
};

export default GameCard;
