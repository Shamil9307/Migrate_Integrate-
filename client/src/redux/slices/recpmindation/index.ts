import { createSlice } from '@reduxjs/toolkit';

import type { CommentWithUser, CommentsState } from '../../../types/recomedation';

import { thunkDeleteRec, thunkLoadRec } from './createAsyncThunks';

const initialState: CommentsState = {
  rocomendation: [],
};

export const recSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkLoadRec.fulfilled, (state, action) => {
      state.rocomendation = action.payload;
    });
    builder.addCase(thunkDeleteRec.fulfilled, (state, action) => {
      const index = state.rocomendation.findIndex((card) => card.id === action.payload);
      if(index!==-1){
        state.rocomendation.splice(index,1)
      }
    });
  },
});

// export const {} = commentsSlice.actions;

export default recSlice.reducer;
