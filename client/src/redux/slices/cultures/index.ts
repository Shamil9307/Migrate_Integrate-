import {createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CultureType, CulturesState } from '../../../types/cultures';
import { thunkDeleteCulture, thunkEditCulture, thunkLoadCultures, thunkPostCulture } from './createAsyncThunks';

const initialState: CulturesState = {
  cultures: [],
  selectedCulture: null,
  addCultureModalIsOpen: false,
};

export const culturesSlice = createSlice({
  name: 'culturesSlice',
  initialState,
  reducers: {
    setSelectedCulture: (state, action: PayloadAction<CultureType>) => {
      state.selectedCulture = action.payload;
    },
    clearSelectedCulture: (state) => {
      state.selectedCulture = null;
    },
    toggleModal: (state) => {
      state.addCultureModalIsOpen = !state.addCultureModalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadCultures.fulfilled, (state, action) => {
      state.cultures = action.payload;
    });
    builder.addCase(thunkDeleteCulture.fulfilled, (state, action) => {
      state.cultures = state.cultures.filter((el) => el.id !== action.payload);
    });
    builder.addCase(thunkEditCulture.fulfilled, (state, action) => {
      const indexCulture = state.cultures.findIndex((culture) => culture.id === action.payload.id);
      if (indexCulture !== -1) {
        state.cultures[indexCulture] = action.payload;
      }
    });
    builder.addCase(thunkPostCulture.fulfilled, (state, action) => {
      state.cultures.unshift(action.payload)
    });
  },
});

export const {setSelectedCulture, clearSelectedCulture, toggleModal} = culturesSlice.actions;

export default culturesSlice.reducer;
