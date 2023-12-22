import axios from 'axios';
import type { AddLegalFormData, LegalType } from '../types/legals';

export const apiLegalInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiLegalService {
  static async getLegals(): Promise<LegalType[]> {
    const response = await apiLegalInstance.get<LegalType[]>('/api/legals');
    return response.data;
  }

  static async deleteLegal(legalId: LegalType['id']): Promise<LegalType['id']> {
    const response = await apiLegalInstance.delete(`/api/legals/${legalId}`);
    if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
    return legalId;
  }

  static async postLegal(formData: AddLegalFormData): Promise<LegalType> {
    const response = await apiLegalInstance.post<LegalType>('/api/legals', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }

  static async editLegal(formData: AddLegalFormData, id: LegalType['id']): Promise<LegalType> {
    const response = await apiLegalInstance.patch<LegalType>(`/api/legals/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }
}

export default ApiLegalService;
