import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkLoadRec } from './redux/slices/recpmindation/createAsyncThunks';
import Recomendation from './components/pages/Recomendation';
import useAxiosInterceptors from './customHooks/useAxiosInterceptors';
import NavBar from './components/ui/Navbar';
import { thunkLoadUsers, thunkLoadUsersWithNastavnik } from './redux/slices/user/createAsyncThunks';
import AdminPage from './components/pages/AdminPage';
import CulturesPage from './components/pages/CulturesPage';
import { thunkLoadCultures } from './redux/slices/cultures/createAsyncThunks';

import LegalsPage from './components/pages/LegalsPage';
import { thunkLoadLegals } from './redux/slices/legals/createAsyncThunks';
import NovostiPage from './components/pages/NovostiPage';
import { thunkLoadNovosti } from './redux/slices/novosti/createAsyncThunks';
import LessonsPage from './components/pages/LessonsPage';
import { thunkLoadLessons } from './redux/slices/lessons/createAsyncThunks';
import MigrantAccountPage from './components/pages/MigrantAccountPage';
import Footer from './components/ui/Footer';
import NastavnikAccountPage from './components/pages/NastavnikAccountPage';
import Chat from './components/ui/Chat';
import { apiCutureInstance } from './services/apiCultureService';
import { authInstance } from './services/authService';
import { apiLegalInstance } from './services/apiLegalService';
import { apiLessonInstance } from './services/apiLessonService';
import { apiNovostInstance } from './services/apiNovostService';
import { apiRecInstance } from './services/apiRecService';
import { apiUserInstance } from './services/apiUserService';
import { background } from '@chakra-ui/react';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authSlice.user);

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkLoadRec());
    void dispatch(thunkLoadCultures());
    void dispatch(thunkLoadUsers());
    void dispatch(thunkLoadLegals());
    void dispatch(thunkLoadNovosti());
    void dispatch(thunkLoadLessons());
    void dispatch(thunkLoadUsersWithNastavnik());
  }, []);
  useAxiosInterceptors(apiCutureInstance);
  useAxiosInterceptors(authInstance);
  useAxiosInterceptors(apiLegalInstance);
  useAxiosInterceptors(apiLessonInstance);
  useAxiosInterceptors(apiNovostInstance);
  useAxiosInterceptors(apiRecInstance);
  useAxiosInterceptors(apiUserInstance);
  useAxiosInterceptors(authInstance);

  return (
    <>
      <Container
        style={{
          backgroundImage:
            'url(https://images.squarespace-cdn.com/content/v1/5686abde7086d7b1817ce390/1640791616836-2JBLAQEDNBQ9DKCF6WB7/Taganka%2Bpanorama%2Bcopy.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route
          element={<PrivateRouter isAllowed={userStatus === 'authenticated'} redirectPath="/" />}
        > */}

          {/* </Route> */}
          <Route path="/recomendation" element={<Recomendation />} />
          <Route path="/news" element={<NovostiPage />} />
          <Route path="/legal" element={<LegalsPage />} />
          <Route path="/culture" element={<CulturesPage />} />
          {user.status === 'authenticated' && user.roleId === 1 && (
            <Route path="/account" element={<AdminPage />} />
          )}
          {user.status === 'authenticated' && user.roleId === 2 && (
            <Route path="/account" element={<NastavnikAccountPage />} />
          )}
          {user.status === 'authenticated' && user.roleId === 3 && (
            <Route path="/account" element={<MigrantAccountPage />} />
          )}
          <Route path="/chat" element={<Chat />} />

          <Route path="/lesson" element={<LessonsPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
