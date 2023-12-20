import axios from 'axios';
import type { UserEditForm, UserType } from '../types/auth';

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

  static async getUsers(): Promise<UserType[]> {
    const response = await apiInstance.get<UserType[]>('/api/users');
    return response.data;
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
