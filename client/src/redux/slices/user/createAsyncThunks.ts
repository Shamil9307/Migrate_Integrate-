import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiUserService from '../../../services/apiUserService';
import type { AddFormText, UserEditForm, UserType } from '../../../types/auth';
import { useAppSelector } from '../../hooks';

export const thunkApruvedUser = createAsyncThunk(
  'usersSlice/thunkApruvedUser',
  async ({ id }: { id: UserType['id'] }) => {
    const editedUser = await ApiUserService.editUserApruved(id);
    return editedUser;
  },
);

// export const thunkEditMigrantStatusSearch = createAsyncThunk(
//   'usersSlice/thunkEditMigrantStatusSearch',
//   async ({ id }: { id: UserType['id'] }) => {
//     const editedUser = await ApiUserService.editMigrantStatusSearchMentor(id);
//     return editedUser;
//   },
// );

export const thunkZayvkaNaNastavnika = createAsyncThunk(
  'usersSlice/thunkZayvkaNaNastavnika',
  async ({id }: { id:UserType['id']}) => {
    // console.log(userId);
    
    const editedUser = await ApiUserService.ZayavkaNaNastavnika(id);
    return editedUser;
  },
);

export const thunkChooseMigrant = createAsyncThunk(
  'usersSlice/thunkChooseMigrant',
  async ({ id, userId }: { id: UserType['id']; userId: UserType['id'] }) => {

    const editedUser = await ApiUserService.choiesMigrant(id, userId);
    return editedUser;
  },
);

export const thunkLoadUsers = createAsyncThunk('commentsSlice/thunkLoadUsers', async () =>
  ApiUserService.getUsers(),
);
export const thunkLoadChat = createAsyncThunk('usersSlice/thunkLoadChat', async () =>
  ApiUserService.getChat(),
);
export const thunkMesAdd = createAsyncThunk(
  'usersSlice/thunkRecAdd',
  (formData: AddFormText) => ApiUserService.postText(formData),
);
export const thunkLoadUsersWithNastavnik = createAsyncThunk('commentsSlice/thunkLoadUsersWithNastavnik', async () =>
  ApiUserService.getUsersNastavniki(),
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
