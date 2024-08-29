import React from 'react';
import { useParams } from 'react-router-dom';
import { useGameApi } from '../hooks/useGameApi';
import { GameEntity } from '../models/Game';

const GamePage: React.FC = () => {
  const { id } = useParams();
  const { games, loading, error } = useGameApi();

  const game = games.find((game) => game.id === parseInt(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>Release Date: {game.releaseDate.toLocaleDateString()}</p>
      <p>Genres: {game.getGenreList()}</p>
      <p>Platforms: {game.getPlatformList()}</p>
      <p>Rating: {game.rating}</p>
      <img src={game.imageUrl} alt={game.title} />
      <a href={game.trailerUrl} target="_blank" rel="noopener noreferrer">
        Watch Trailer
      </a>
    </div>
  );
};

export default GamePage;
