import axios from 'axios';
import { CultureType } from '../types/cultures';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

class ApiCultureService {
  static async getCultures(): Promise<CultureType[]> {
    const response = await apiInstance.get<CultureType[]>('/api/cultures');
    return response.data;
  }

  //   static async deleteComment(commentId: CommentType['id']): Promise<CommentType['id']> {
  //     const response = await apiInstance.delete(`/api/comments/${commentId}`);
  //     if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
  //     return commentId;
  //   }

  //   static async postComment(formData: AddCommentFormData): Promise<CommentWithUser> {
  //     const response = await apiInstance.post<CommentWithUser>('/api/comments', formData);
  //     if (response.status === 201) return response.data;
  //     return Promise.reject(new Error('Error posting to server'));
  //   }

  //   static async editComment(
  //     formData: AddCommentFormData,
  //     id: CommentType['id'],
  //   ): Promise<CommentType> {
  //     const response = await apiInstance.patch<CommentWithUser>(`/api/comments/${id}`, formData);
  //     if (response.status === 200) return response.data;
  //     return Promise.reject(new Error('Error editing on server'));
  //   }

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
