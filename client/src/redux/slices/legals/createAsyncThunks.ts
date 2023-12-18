import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiLegalService from '../../../services/apiLegalService';
import type { AddLegalFormData, LegalType } from '../../../types/legals';

export const thunkLoadLegals = createAsyncThunk('legalsSlice/thunkLoadLegals', async () =>
  ApiLegalService.getLegals(),
);

export const thunkDeleteLegal = createAsyncThunk(
  'legalsSlice/thunkDeleteLegal',
  (id: LegalType['id']) => ApiLegalService.deleteLegal(id),
);

export const thunkEditLegal = createAsyncThunk(
  'legalsSlice/thunkEditLegal',
  ({ formData, id }: { formData: AddLegalFormData; id: LegalType['id'] }) =>
  ApiLegalService.editLegal(formData, id),
);

export const thunkPostLegal = createAsyncThunk(
  'legalsSlice/thunkPostLegal',
  (formData: AddLegalFormData) => ApiLegalService.postLegal(formData),
);
