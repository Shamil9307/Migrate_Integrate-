import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UserType, UsersState } from '../../../types/auth';
import { thunkApruvedUser, thunkDeniteUser, thunkEditUser, thunkLoadUsers } from './createAsyncThunks';

const initialState: UsersState = {
  selectedUser: null,

  allUser: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setSelectedCard: (state, action: PayloadAction<UserType>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadUsers.fulfilled, (state, action) => {
      state.allUser = action.payload;
    });
    builder.addCase(thunkApruvedUser.fulfilled, (state, action) => {
      const index = state.allUser.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.allUser[index] = action.payload;
      }
    });
    builder.addCase(thunkDeniteUser.fulfilled, (state, action) => {
      const index = state.allUser.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.allUser[index] = action.payload;
      }
    });
    builder.addCase(thunkEditUser.fulfilled, (state, action) => {
      const index = state.allUser.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.allUser[index] = action.payload;
      }
    });
  },
});

export const { setSelectedCard } = userSlice.actions;

export default userSlice.reducer;
