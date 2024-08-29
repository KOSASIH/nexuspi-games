import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from '../reducers/gameReducer';
import { userReducer } from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
