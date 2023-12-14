import axios from 'axios';
import type { BackendAuth, LoginFormData, SignupFormData } from '../types/auth/index';

export const authInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  static async refresh(): Promise<BackendAuth> {
    const response = await authInstance.get<BackendAuth>('/tokens/refresh');
    return response.data;
  }

  static async login(formData: LoginFormData): Promise<BackendAuth> {
    const response = await authInstance.post<BackendAuth>('/auth/login', formData);
    return response.data;
  }

  static async signup(formData: SignupFormData): Promise<BackendAuth> {
    const response = await authInstance.post<BackendAuth>('/auth/signup', formData);
    return response.data;
  }

  static async logout(): Promise<void> {
    return authInstance.post('/auth/logout');
  }

  static async check(): Promise<BackendAuth> {
    const response = await authInstance.get<BackendAuth>('/auth/check');
    return response.data;
  }
}

export default AuthService;
