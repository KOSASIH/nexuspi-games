import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';

const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default HomeRoute;
