import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import GameView from './views/GameView';
import NotFoundView from './views/NotFoundView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/game/:id" component={GameView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
