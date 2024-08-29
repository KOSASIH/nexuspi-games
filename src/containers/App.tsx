import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameList from '../components/GameList';
import GameDetail from './GameDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={GameList} />
        <Route path="/games/:id" component={GameDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
