import axios from 'axios';
import type { AddLessonFormData, LessonType, LessonWithUser } from '../types/lesson';

export const apiLessonInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiLessonService {
  static async getLessons(): Promise<LessonType[]> {
    const response = await apiLessonInstance.get<LessonType[]>('/api/lessons');
    return response.data;
  }

  static async deleteLesson(lessonId: LessonType['id']): Promise<LessonType['id']> {
    const response = await apiLessonInstance.delete(`/api/lessons/${lessonId}`);
    if (response.status === 200) return lessonId;
    return Promise.reject(new Error('Error deleting from server'));
  }

  static async editLesson(formData: AddLessonFormData, id: LessonType['id']): Promise<LessonType> {
    const response = await apiLessonInstance.patch<LessonType>(`/api/lessons/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async postLesson(formData: AddLessonFormData): Promise<LessonType> {
    const response = await apiLessonInstance.post<LessonType>('/api/lessons', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  // static async getUsersIncludeLessons(): Promise<LessonWithUser[]> {
  //   const response = await apiInstance.get<LessonWithUser[]>('/api/users');
  //   return response.data;
  // }
}

export default ApiLessonService;
