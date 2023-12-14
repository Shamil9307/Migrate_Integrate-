import axios from 'axios';
import type { AddCommentFormData, RecomType, CommentWithUser } from '../types/recomedation/index';
import type { UserType, UserWithComments } from '../types/auth';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

class ApiRecService {
  static async getCommentsIncludeUsers(): Promise<CommentWithUser[]> {
    const response = await apiInstance.get<CommentWithUser[]>('/api/rec');
    return response.data;
  }

  static async deleteRec(commentId: RecomType['id']): Promise<RecomType['id']> {
    const response = await apiInstance.delete(`/api/rec/${commentId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return commentId;
  }

  static async postComment(formData: AddCommentFormData): Promise<CommentWithUser> {
    const response = await apiInstance.post<CommentWithUser>('/api/rec', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editComment(
    formData: AddCommentFormData,
    id: RecomType['id'],
  ): Promise<RecomType> {
    const response = await apiInstance.patch<CommentWithUser>(`/api/rec/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async getUsersIncludeComments(): Promise<UserWithComments[]> {
    const response = await apiInstance.get<UserWithComments[]>('/api/users');
    return response.data;
  }

  static async getCommentsByUser(userId: UserType['id']): Promise<CommentWithUser[]> {
    const response = await apiInstance.get<CommentWithUser[]>(`/api/users/${userId}/comments`);
    return response.data;
  }
}

export default ApiRecService;
