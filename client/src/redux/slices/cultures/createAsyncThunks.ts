import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCultureService from '../../../services/apiCultureService';
import type { AddCultureFormData, CultureType } from '../../../types/cultures';

export const thunkLoadCultures = createAsyncThunk('culturesSlice/thunkLoadCultures', async () =>
  ApiCultureService.getCultures(),
);

export const thunkDeleteCulture = createAsyncThunk(
  'culturesSlice/thunkDeleteCulture',
  (id: CultureType['id']) => ApiCultureService.deleteCulture(id),
);

export const thunkEditCulture = createAsyncThunk(
  'culturesSlice/thunkEditCulture',
  ({ formData, id }: { formData: AddCultureFormData; id: CultureType['id'] }) =>
  ApiCultureService.editCulture(formData, id),
);

export const thunkPostCulture = createAsyncThunk(
  'culturesSlice/thunkPostCulture',
  (formData: AddCultureFormData) => ApiCultureService.postCulture(formData),
);
