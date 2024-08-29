import { createReducer } from '@reduxjs/toolkit';
import { GameEntity } from '../models/Game';
import { GameActions } from '../actions/gameActions';

interface GameState {
  games: GameEntity[];
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  loading: false,
  error: null,
};

const gameReducer = createReducer(initialState, {
  [GameActions.fetchGames.pending]: (state) => {
    state.loading = true;
  },
  [GameActions.fetchGames.fulfilled]: (state, action) => {
    state.games = action.payload;
    state.loading = false;
  },
  [GameActions.fetchGames.rejected]: (state, action) => {
    state.error = action.error.message;
    state.loading = false;
  },
});

export default gameReducer;
