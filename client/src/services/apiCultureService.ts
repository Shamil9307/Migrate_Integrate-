import axios from 'axios';
import type { AddCultureFormData, CultureType } from '../types/cultures';

export const apiCutureInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiCultureService {
  static async getCultures(): Promise<CultureType[]> {
    const response = await apiCutureInstance.get<CultureType[]>('/api/cultures');
    return response.data;
  }

  static async deleteCulture(cultureId: CultureType['id']): Promise<CultureType['id']> {
    const response = await apiCutureInstance.delete(`/api/cultures/${cultureId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return cultureId;
  }

  static async postCulture(formData: AddCultureFormData): Promise<CultureType> {
    const response = await apiCutureInstance.post<CultureType>('/api/cultures', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editCulture(
    formData: AddCultureFormData,
    id: CultureType['id'],
  ): Promise<CultureType> {
    const response = await apiCutureInstance.patch<CultureType>(`/api/cultures/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  //   static async getUsersIncludeComments(): Promise<UserWithComments[]> {
  //     const response = await apiInstance.get<UserWithComments[]>('/api/users');
  //     return response.data;
  //   }

  //   static async getCommentsByUser(userId: UserType['id']): Promise<CommentWithUser[]> {
  //     const response = await apiInstance.get<CommentWithUser[]>(`/api/users/${userId}/comments`);
  //     return response.data;
  //   }
}

export default ApiCultureService;
