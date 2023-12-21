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
import { orange } from '@mui/material/colors';

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
  useAxiosInterceptors();

  return (
    <Container
      style={{
        backgroundColor: '#ff8149',
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

        {user.roleId === 1 ? (
          <Route path="/account" element={<AdminPage />} />
        ) : user.roleId === 2 ? (
          <Route path="/account" element={<NastavnikAccountPage />} />
        ) : (
          <Route path="/account" element={<MigrantAccountPage />} />
        )}

        <Route path="/lesson" element={<LessonsPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
