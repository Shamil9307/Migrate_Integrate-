import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NovostType, NovostiState } from '../../../types/novosti';
import {
  thunkDeleteNovost,
  thunkEditNovost,
  thunkLoadNovosti,
  thunkPostNovost,
} from './createAsyncThunks';

const initialState: NovostiState = {
  novosti: [],
  selectedNovost: null,
  addNovostModalIsOpen: false,
};

export const novostiSlice = createSlice({
  name: 'novostiSlice',
  initialState,
  reducers: {
    setSelectedNovost: (state, action: PayloadAction<NovostType>) => {
      state.selectedNovost = action.payload;
    },
    clearSelectedNovost: (state) => {
      state.selectedNovost = null;
    },
    toggleModal: (state) => {
      state.addNovostModalIsOpen = !state.addNovostModalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadNovosti.fulfilled, (state, action) => {
      state.novosti = action.payload;
    });
    builder.addCase(thunkDeleteNovost.fulfilled, (state, action) => {
      state.novosti = state.novosti.filter((el) => el.id !== action.payload);
    });
    builder.addCase(thunkEditNovost.fulfilled, (state, action) => {
      const indexNovost = state.novosti.findIndex((novost) => novost.id === action.payload.id);
      if (indexNovost !== -1) {
        state.novosti[indexNovost] = action.payload;
      }
    });
    builder.addCase(thunkPostNovost.fulfilled, (state, action) => {
      state.novosti.unshift(action.payload);
    });
  },
});

export const { setSelectedNovost, clearSelectedNovost, toggleModal } = novostiSlice.actions;

export default novostiSlice.reducer;
