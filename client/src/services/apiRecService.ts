import axios from 'axios';
import type { AddCommentFormData, RecomType, RecWithUser } from '../types/recomedation/index';
import type { UserType } from '../types/auth';

export const apiRecInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiRecService {
  static async getUsers(): Promise<RecWithUser[]> {
    const response = await apiRecInstance.get<RecWithUser[]>('/api/rec');
    return response.data;
  }

  static async deleteRec(commentId: RecomType['id']): Promise<RecomType['id']> {
    const response = await apiRecInstance.delete(`/api/rec/${commentId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return commentId;
  }

  static async postRec(formData: AddCommentFormData): Promise<RecWithUser> {
    const response = await apiRecInstance.post<RecWithUser>('/api/rec', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editComment(formData: AddCommentFormData, id: RecomType['id']): Promise<RecomType> {
    const response = await apiRecInstance.patch<RecWithUser>(`/api/rec/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async getUsersIncludeComments(): Promise<UserType[]> {
    const response = await apiRecInstance.get<UserType[]>('/api/rec/user');
    return response.data;
  }

  // static async getCommentsByUser(userId: UserType['id']): Promise<CommentWithUser[]> {
  //   const response = await apiInstance.get<CommentWithUser[]>(`/api/users/${userId}/comments`);
  //   return response.data;
  // }
}

export default ApiRecService;
