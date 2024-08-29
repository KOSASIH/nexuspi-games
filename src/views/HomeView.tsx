import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../utils/api';
import { GameEntity } from '../types/Game';

interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.entities);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await getGames();
        dispatch({ type: 'game/setGames', payload: response.data.games });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
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

export default HomeView;
