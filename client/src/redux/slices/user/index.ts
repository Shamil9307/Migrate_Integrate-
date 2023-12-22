import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ChatWithUser, UserType, UsersState } from '../../../types/auth';
import {
  thunkApruvedUser,
  thunkChooseMigrant,
  thunkDeniteUser,
  thunkEditUser,
  thunkLoadChat,
  thunkLoadUsers,
  thunkLoadUsersWithNastavnik,
  thunkMesAdd,
  thunkZayvkaNaNastavnika,
} from './createAsyncThunks';

const initialState: UsersState = {
  selectedUser: null,
  nastavnik: [],
  allUser: [],
  chat: [],
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
    builder.addCase(thunkLoadChat.fulfilled, (state, action) => {
      state.chat = action.payload;
    });
    builder.addCase(thunkMesAdd.fulfilled, (state, action: PayloadAction<ChatWithUser>) => {
      state.chat.push(action.payload);
    });
    builder.addCase(thunkLoadUsersWithNastavnik.fulfilled, (state, action) => {
      state.nastavnik = action.payload;
    });
    // builder.addCase(thunkEditMigrantStatusSearch.fulfilled, (state, action) => {
    //   const index = state.allUser.findIndex((user) => user.id === action.payload.id);
    //   if (index !== -1) {
    //     state.allUser[index] = action.payload;
    //   }
    // });
    builder.addCase(thunkApruvedUser.fulfilled, (state, action: PayloadAction<UserType>) => {
      const index = state.allUser.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.allUser[index] = action.payload;
      }
    });
    builder.addCase(thunkZayvkaNaNastavnika.fulfilled, (state, action) => {
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
    builder.addCase(thunkChooseMigrant.fulfilled, (state, action) => {
      const index = state.allUser.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.allUser[index] = action.payload;
      }
    });
  },
});

export const { setSelectedCard } = userSlice.actions;

export default userSlice.reducer;
