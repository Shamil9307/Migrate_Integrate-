import { useEffect } from 'react';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { thunkRefreshToken } from '../redux/slices/auth/createAsyncThunks';
import { apiRecInstance } from '../services/apiRecService';
import { apiCutureInstance } from '../services/apiCultureService';
import { apiLegalInstance } from '../services/apiLegalService';
import { apiLessonInstance } from '../services/apiLessonService';
import { apiNovostInstance } from '../services/apiNovostService';
import { apiUserInstance } from '../services/apiUserService';
import { authInstance } from '../services/authService';

export default function useAxiosInterceptors(): void {
  const accessToken = useAppSelector((store) => store.authSlice.accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = apiRecInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiRecInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiRecInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiRecInstance.interceptors.request.eject(requestInterceptor);
      apiRecInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = apiCutureInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiCutureInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiCutureInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiCutureInstance.interceptors.request.eject(requestInterceptor);
      apiCutureInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = apiLegalInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiLegalInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiLegalInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiLegalInstance.interceptors.request.eject(requestInterceptor);
      apiLegalInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = apiLessonInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiLessonInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiLessonInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiLessonInstance.interceptors.request.eject(requestInterceptor);
      apiLessonInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = apiNovostInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiNovostInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiNovostInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiNovostInstance.interceptors.request.eject(requestInterceptor);
      apiNovostInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = apiUserInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiUserInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiUserInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiUserInstance.interceptors.request.eject(requestInterceptor);
      apiUserInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return authInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  
}
