import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiLessonService from '../../../services/apiLessonService';
import type { AddLessonFormData, LessonType } from '../../../types/lesson';

export const thunkLoadLessons = createAsyncThunk('lessonsSlice/thunkLoadLessons', async () =>
  ApiLessonService.getLessons(),
);

export const thunkDeleteLesson = createAsyncThunk(
  'lessonsSlice/thunkDeleteLesson',
  (id: LessonType['id']) => ApiLessonService.deleteLesson(id),
);

export const thunkEditLesson = createAsyncThunk(
  'lessonsSlice/thunkEditLesson',
  ({ formData, id }: { formData: AddLessonFormData; id: LessonType['id'] }) =>
    ApiLessonService.editLesson(formData, id),
);
export const thunkPostLesson = createAsyncThunk(
  'lessonsSlice/thunkPostLesson',
  (formData: AddLessonFormData) => ApiLessonService.postLesson(formData),
);


// export const thunkLoadUsers = createAsyncThunk('commentsSlice/thunkLoadUsers', async () =>
//   ApiLessonService.getUsersIncludeLessons(),
// );
