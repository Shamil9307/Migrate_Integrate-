import axios from 'axios';
import type { UserEditForm, UserType } from '../types/auth';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});
class ApiUserService {
  static async editUserApruved(id: number): Promise<UserType> {
    const response = await apiInstance.patch<UserType>(`/api/users/${id}`, { status: 1 });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async getUsers(): Promise<UserType[]> {
    const response = await apiInstance.get<UserType[]>('/api/users');
    return response.data;
  }

  static async getUsersNastavniki(): Promise<UserType[]> {
    const response = await apiInstance.get<UserType[]>('/api/users/mig');
    return response.data;
  }

  static async ZayavkaNaNastavnika(id:number): Promise<UserType> {
    // console.log(userId);
    
    const response = await apiInstance.patch<UserType>(`/api/users/search/${id}`, {
      
    
    });
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
