import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiCultureService from "../../../services/apiCultureService";


export const thunkLoadCultures = createAsyncThunk('culturesSlice/thunkLoadCultures', async () =>
ApiCultureService.getCultures(),
);