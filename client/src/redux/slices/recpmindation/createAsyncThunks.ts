import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RecomType } from '../../../types/recomedation';
import ApiRecService from '../../../services/apiRecService';

export const thunkLoadRec = createAsyncThunk('commentsSlice/thunkLoadComments', async () =>
  ApiRecService.getCommentsIncludeUsers(),
);

// export const thunkPostComment = createAsyncThunk(
//   'commentsSlice/thunkPostComment',
//   (formData: AddCommentFormData) => ApiService.postComment(formData),
// );

// export const thunkEditComment = createAsyncThunk(
//   'commentsSlice/thunkEditComment',
//   ({ formData, id }: { formData: AddCommentFormData; id: CommentType['id'] }) =>
//     ApiService.editComment(formData, id),
// );

export const thunkDeleteRec = createAsyncThunk(
  'commentsSlice/thunkDeleteComment',
  (id: RecomType['id']) => ApiRecService.deleteRec(id),
);

// export const thunkLoadUsers = createAsyncThunk('commentsSlice/thunkLoadUsers', async () =>
//   ApiService.getUsersIncludeComments(),
// );

// export const thunkGetCommentsByUser = createAsyncThunk(
//   'commentsSlice/thunkGetCommentsByUser',
//   (userId: UserType['id']) => ApiService.getCommentsByUser(userId),
// );
