import axios from 'axios';
import type { AddLegalFormData, LegalType } from '../types/legals';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

class ApiLegalService {
  static async getLegals(): Promise<LegalType[]> {
    const response = await apiInstance.get<LegalType[]>('/api/legals');
    return response.data;
  }

  static async deleteLegal(legalId: LegalType['id']): Promise<LegalType['id']> {
    const response = await apiInstance.delete(`/api/legals/${legalId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return legalId;
  }

    static async postLegal(formData: AddLegalFormData): Promise<LegalType> {
      const response = await apiInstance.post<LegalType>('/api/legals', formData);
      if (response.status === 201) return response.data;
      return Promise.reject(new Error('Error posting to server'));
    }

    static async editLegal(
      formData: AddLegalFormData,
      id: LegalType['id'],
    ): Promise<LegalType> {
      const response = await apiInstance.patch<LegalType>(`/api/legals/${id}`, formData);
      if (response.status === 200) return response.data;
      return Promise.reject(new Error('Error editing on server'));
    }  
}

export default ApiLegalService;
