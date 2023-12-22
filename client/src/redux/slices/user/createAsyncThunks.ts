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
  async ({ id }: { id: UserType['id'] }) => {
    // console.log(userId);

    const editedUser = await ApiUserService.ZayavkaNaNastavnika(id);
    return editedUser;
  },
);

export const thunkChooseMigrant = createAsyncThunk(
  'usersSlice/thunkChooseMigrant',
  async ({ id, userId }: { id: UserType['id']; userId: UserType['id'] }) => {
    const editedUser = await ApiUserService.choiesMigrant(id, userId);
    console.log(editedUser, 'editedUser');
    return editedUser;
  },
);

export const thunkLoadUsers = createAsyncThunk('commentsSlice/thunkLoadUsers', async () =>
  ApiUserService.getUsers(),
);
export const thunkLoadChat = createAsyncThunk('usersSlice/thunkLoadChat', async () =>
  ApiUserService.getChat(),
);
// export const thunkMesAdd = createAsyncThunk(
//   'usersSlice/thunkRecAdd',
//   async ({ formData, userId }: { formData: AddFormText; userId: number }) => {
//     // Вы можете использовать otherArgument внутри этой функции при необходимости
//     const response = await ApiUserService.postText(formData, userId);
//     return response;
//   },
// );
export const thunkMesAdd = createAsyncThunk(
  'usersSlice/thunkRecAdd',
  async (formData: AddFormText) => {
    // Отправьте запрос
    const response = await ApiUserService.postText(formData);

    return response;
  },
);
export const thunkLoadUsersWithNastavnik = createAsyncThunk(
  'commentsSlice/thunkLoadUsersWithNastavnik',
  async () => ApiUserService.getUsersNastavniki(),
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
