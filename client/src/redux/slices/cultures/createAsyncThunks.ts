import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../../services/apiCultureService";


export const thunkLoadCultures = createAsyncThunk('culturesSlice/thunkLoadCultures', async () =>
  ApiService.getCultures(),
);