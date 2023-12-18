import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiNovostService from '../../../services/apiNovostService';
import type { AddNovostFormData, NovostType } from '../../../types/novosti';

export const thunkLoadNovosti = createAsyncThunk('novostiSlice/thunkLoadNovosti', async () =>
  ApiNovostService.getNovosti(),
);

export const thunkDeleteNovost = createAsyncThunk(
  'novostiSlice/thunkDeleteNovost',
  (id: NovostType['id']) => ApiNovostService.deleteNovost(id),
);

export const thunkEditNovost = createAsyncThunk(
  'novostiSlice/thunkEditNovost',
  ({ formData, id }: { formData: AddNovostFormData; id: NovostType['id'] }) =>
    ApiNovostService.editNovost(formData, id),
);

export const thunkPostNovost = createAsyncThunk(
  'novostiSlice/thunkPostNovost',
  (formData: AddNovostFormData) => ApiNovostService.postNovost(formData),
);
