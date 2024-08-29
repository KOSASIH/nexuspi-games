import { Route, Routes } from 'react-router-dom';
import GamePage from '../pages/Game';

const GameRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/game/:id" element={<GamePage />} />
    </Routes>
  );
};

export default GameRoute;
