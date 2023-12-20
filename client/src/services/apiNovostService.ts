import axios from 'axios';
import type { AddNovostFormData, NovostType } from '../types/novosti';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiNovostService {
  static async getNovosti(): Promise<NovostType[]> {
    const response = await apiInstance.get<NovostType[]>('/api/novosti');
    return response.data;
  }

  static async deleteNovost(novostId: NovostType['id']): Promise<NovostType['id']> {
    const response = await apiInstance.delete(`/api/novosti/${novostId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return novostId;
  }

  static async postNovost(formData: AddNovostFormData): Promise<NovostType> {
    const response = await apiInstance.post<NovostType>('/api/novosti', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editNovost(formData: AddNovostFormData, id: NovostType['id']): Promise<NovostType> {
    const response = await apiInstance.patch<NovostType>(`/api/novosti/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }
}

export default ApiNovostService;
