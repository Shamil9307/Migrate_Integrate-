import { useEffect } from 'react';
import type { AxiosError } from 'axios';
import { apiInstance } from '../services/apiRecService';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { thunkRefreshToken } from '../redux/slices/auth/createAsyncThunks';

export default function useAxiosInterceptors(): void {
  const accessToken = useAppSelector((store) => store.authSlice.accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = apiInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      apiInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
}
