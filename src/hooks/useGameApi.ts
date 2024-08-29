import { useState, useEffect } from 'react';
import axios from 'axios';

interface GameApi {
  games: Game[];
  loading: boolean;
  error: string | null;
}

const useGameApi = (): GameApi => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://example.com/api/games');
        setGames(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { games, loading, error };
};

export default useGameApi;
