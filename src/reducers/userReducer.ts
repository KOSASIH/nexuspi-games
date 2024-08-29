import { createReducer } from '@reduxjs/toolkit';
import { UserEntity } from '../models/User';
import { UserActions } from '../actions/userActions';

interface UserState {
  users: UserEntity[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, {
  [UserActions.fetchUsers.pending]: (state) => {
    state.loading = true;
  },
  [UserActions.fetchUsers.fulfilled]: (state, action) => {
    state.users = action.payload;
    state.loading = false;
  },
  [UserActions.fetchUsers.rejected]: (state, action) => {
    state.error = action.error.message;
    state.loading = false;
  },
});

export default userReducer;
