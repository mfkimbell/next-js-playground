// lib/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  role: string;
  credits: number;
}

const initialState: UserState = { id: '', role: 'user', credits: 0 };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // These "mutating" reducers are actually immutable thanks to Immer.
    increment_credits(state) {
      state.credits += 1;
    },
    decrement_credits(state) {
      state.credits -= 1;
    },
    add_x_credits(state, action: PayloadAction<number>) {
      state.credits += action.payload;
    },
    setUser(state, action) {
      return action.payload;
    },
    clearUser(state) {
      state.id = '';
      state.credits = 0;
      state.role = 'user';
    },
  },
});

// Auto-generated action creators and reducer
export const { increment_credits, decrement_credits, add_x_credits, setUser, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
