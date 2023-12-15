import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CommentsState, RecWithUser } from '../../../types/recomedation';

import {
  thunkDeleteRec,
  thunkEditRec,
  thunkLoadRec,
  thunkLoadUsers,
  thunkRecAdd,
} from './createAsyncThunks';
import type { UserType } from '../../../types/auth';

const initialState: CommentsState = {
  rocomendation: [],
  selectedRes: null,
  addResModalIsOpen: false,
  allUser: [],
};

export const recSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    setSelectedRes: (state, action: PayloadAction<RecWithUser>) => {
      state.selectedRes = action.payload;
    },
    clearSelectedRes: (state) => {
      state.selectedRes = null;
    },
    toggleModal: (state) => {
      state.addResModalIsOpen = !state.addResModalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadRec.fulfilled, (state, action: PayloadAction<RecWithUser[]>) => {
      state.rocomendation = action.payload;
    });
    builder.addCase(thunkDeleteRec.fulfilled, (state, action) => {
      const index = state.rocomendation.findIndex((card) => card.id === action.payload);
      if (index !== -1) {
        state.rocomendation.splice(index, 1);
      }
    });
    builder.addCase(thunkEditRec.fulfilled, (state, action) => {
      const index = state.rocomendation.findIndex((comment) => comment.id === action.payload.id);
      if (index !== -1) {
        state.rocomendation[index] = action.payload;
      }
    });
    builder.addCase(thunkRecAdd.fulfilled, (state, action) => {
      state.rocomendation.unshift(action.payload);
    });
    builder.addCase(thunkLoadUsers.fulfilled, (state, action) => {
      state.allUser = action.payload;
    });
  },
});

export const { setSelectedRes, toggleModal, clearSelectedRes } = recSlice.actions;

export default recSlice.reducer;
