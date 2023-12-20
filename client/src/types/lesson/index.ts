import type { UserType } from '../auth';

export type LessonType = {
  id: number;
  title: string;
  text: string;
  url: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LessonWithUser = LessonType & { User?: UserType };

// Redux Slice State
export type LessonsState = {
  lessons: LessonType[];
  selectedLesson: null | LessonType;
  addLessonModalisOpen: boolean;
};

export type AddLessonFormData = {
  title: string;
  text: string;
  url: string;
  img: string;
};
