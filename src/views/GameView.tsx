import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGameById } from '../utils/api';
import { GameEntity } from '../types/Game';

interface GameViewProps {
  gameId: number;
}

const GameView: React.FC<GameViewProps> = ({ gameId }) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game.entities[gameId]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      try {
        const response = await getGameById(gameId);
        dispatch({ type: 'game/setGame', payload: response.data });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [gameId, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>Release Date: {game.releaseDate.toLocaleDateString()}</p>
      <p>Rating: {game.rating}</p>
    </div>
  );
};

export default GameView;
