import { createSlice } from '@reduxjs/toolkit';
import type { CulturesState } from '../../../types/cultures';
import { thunkLoadCultures } from './createAsyncThunks';

const initialState: CulturesState = {
  cultures: [],
};

export const culturesSlice = createSlice({
  name: 'culturesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkLoadCultures.fulfilled, (state, action) => {
      state.cultures = action.payload;
    });
  },
});

export const {} = culturesSlice.actions;

export default culturesSlice.reducer;
