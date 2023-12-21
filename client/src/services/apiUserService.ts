import axios from 'axios';
import type { AddFormText, ChatWithUser, UserChat, UserEditForm, UserType } from '../types/auth';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});
class ApiUserService {
  static async editUserApruved(id: UserType['id']): Promise<UserType> {
    const response = await apiInstance.patch<UserType>(`/api/users/apr/${id}`, { status: 1 });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async choiesMigrant(id: number, userId: number): Promise<UserType> {
    const response = await apiInstance.patch<UserType>(`/api/users/addmig/${id}`, {
      status: 1,
      userId,
    });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async postText(formData: AddFormText): Promise<ChatWithUser> {
    const response = await apiInstance.post<ChatWithUser>('/api/users/addm', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async getUsers(): Promise<UserType[]> {
    const response = await apiInstance.get<UserType[]>('/api/users');
    return response.data;
  }

  static async getChat(): Promise<ChatWithUser[]> {
    const response = await apiInstance.get<ChatWithUser[]>('/api/users/chat');
    return response.data;
  }

  static async getUsersNastavniki(): Promise<UserType[]> {
    const response = await apiInstance.get<UserType[]>('/api/users/mig');
    return response.data;
  }

  static async ZayavkaNaNastavnika(id: number): Promise<UserType> {
    // console.log(userId);

    const response = await apiInstance.patch<UserType>(`/api/users/search/${id}`, {});
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async editUserDenite(id: number): Promise<UserType> {
    const response = await apiInstance.patch<UserType>(`/api/users/den/${id}`, { status: 3 });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async editUser(formData: UserEditForm, id: UserType['id']): Promise<UserType> {
    const response = await apiInstance.patch<UserType>(`/api/users/edit/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }
}
export default ApiUserService;
