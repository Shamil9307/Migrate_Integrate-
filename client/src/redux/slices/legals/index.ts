import {createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LegalType, LegalsState } from '../../../types/legals';
import { thunkDeleteLegal, thunkEditLegal, thunkLoadLegals, thunkPostLegal } from './createAsyncThunks';


const initialState: LegalsState = {
  legals: [],
  selectedLegal: null,
  addLegalModalIsOpen: false,
};

export const legalsSlice = createSlice({
  name: 'legalsSlice',
  initialState,
  reducers: {
    setSelectedLegal: (state, action: PayloadAction<LegalType>) => {
      state.selectedLegal = action.payload;
    },
    clearSelectedLegal: (state) => {
      state.selectedLegal = null;
    },
    toggleModal: (state) => {
      state.addLegalModalIsOpen = !state.addLegalModalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadLegals.fulfilled, (state, action) => {
      state.legals = action.payload;
    });
    builder.addCase(thunkDeleteLegal.fulfilled, (state, action) => {
      state.legals = state.legals.filter((el) => el.id !== action.payload);
    });
    builder.addCase(thunkEditLegal.fulfilled, (state, action) => {
      const indexLegal = state.legals.findIndex((legal) => legal.id === action.payload.id);
      if (indexLegal !== -1) {
        state.legals[indexLegal] = action.payload;
      }
    });
    builder.addCase(thunkPostLegal.fulfilled, (state, action) => {
      state.legals.unshift(action.payload)
    });
  },
});

export const {setSelectedLegal, clearSelectedLegal, toggleModal} = legalsSlice.actions;

export default legalsSlice.reducer;
