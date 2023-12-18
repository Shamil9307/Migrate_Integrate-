import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiUserService from '../../../services/apiUserService';
import type { UserEditForm, UserType } from '../../../types/auth';

export const thunkApruvedUser = createAsyncThunk(
  'usersSlice/thunkApruvedUser',
  async ({ id }: { id: UserType['id'] }) => {
    const editedUser = await ApiUserService.editUserApruved(id);
    return editedUser;
  },
);

export const thunkLoadUsers = createAsyncThunk('commentsSlice/thunkLoadUsers', async () =>
  ApiUserService.getUsers(),
);

export const thunkDeniteUser = createAsyncThunk(
  'usersSlice/thunkDeniteUser',
  async ({ id }: { id: UserType['id'] }) => {
    const editedUser = await ApiUserService.editUserDenite(id);
    return editedUser;
  },
);
export const thunkEditUser = createAsyncThunk(
  'usersSlice/thunkEditUser',
  ({ formData, id }: { formData: UserEditForm; id: UserType['id'] }) =>
    ApiUserService.editUser(formData, id),
);