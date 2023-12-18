import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  thunkDeleteLesson,
  thunkEditLesson,
  thunkLoadLessons,
  thunkPostLesson,
} from './createAsyncThunks';
import type { LessonType, LessonWithUser, LessonsState } from '../../../types/lesson';

const initialState: LessonsState = {
  lessons: [],
  selectedLesson: null,
  addLessonModalisOpen: false,
};

export const lessonsSlice = createSlice({
  name: 'lessonsSlice',
  initialState,
  reducers: {
    setSelectedLesson: (state, action: PayloadAction<LessonType>) => {
      state.selectedLesson = action.payload;
    },
    clearSelectedLesson: (state) => {
      state.selectedLesson = null;
    },
    toggleModal: (state) => {
      state.addLessonModalisOpen = !state.addLessonModalisOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
    });
    builder.addCase(thunkDeleteLesson.fulfilled, (state, action) => {
      const deleteLesson = state.lessons.findIndex((lesson) => lesson.id === action.payload);
      if (deleteLesson !== -1) {
        state.lessons.splice(deleteLesson, 1);
      }
    });
    // builder.addCase(thunkLoadUsers.fulfilled, (state, action) => {
    //   state.users = action.payload;
    // });
    builder.addCase(thunkPostLesson.fulfilled, (state, action: PayloadAction<LessonType>) => {
      state.lessons.unshift(action.payload);
    });
    builder.addCase(thunkEditLesson.fulfilled, (state, action) => {
      const index = state.lessons.findIndex((lesson) => lesson.id === action.payload.id);
      if (index !== -1) {
        state.lessons[index] = action.payload;
      }
      state.selectedLesson = null;
    });
  },
});

export const { clearSelectedLesson, setSelectedLesson, toggleModal } = lessonsSlice.actions;

export default lessonsSlice.reducer;
