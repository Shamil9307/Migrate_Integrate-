import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { useAppDispatch } from './redux/hooks';
import { thunkLoadRec } from './redux/slices/recpmindation/createAsyncThunks';
import Recomendation from './components/pages/Recomendation';
import useAxiosInterceptors from './customHooks/useAxiosInterceptors';
import NavBar from './components/ui/Navbar';
import { thunkLoadUsers, thunkLoadUsersWithNastavnik } from './redux/slices/user/createAsyncThunks';
import AdminPage from './components/pages/AdminPage';
import CulturesPage from './components/pages/CulturesPage';
import { thunkLoadCultures } from './redux/slices/cultures/createAsyncThunks';
import AccountPage from './components/pages/AccountPage';
import LegalsPage from './components/pages/LegalsPage';
import { thunkLoadLegals } from './redux/slices/legals/createAsyncThunks';
import NovostiPage from './components/pages/NovostiPage';
import { thunkLoadNovosti } from './redux/slices/novosti/createAsyncThunks';
import LessonsPage from './components/pages/LessonsPage';
import { thunkLoadLessons } from './redux/slices/lessons/createAsyncThunks';
import MigrantAccountPage from './components/pages/MigrantAccountPage';
import Footer from './components/ui/Footer';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkLoadRec());
    void dispatch(thunkLoadCultures());
    void dispatch(thunkLoadUsers());
    void dispatch(thunkLoadLegals());
    void dispatch(thunkLoadNovosti());
    void dispatch(thunkLoadLessons());
    void dispatch(thunkLoadUsersWithNastavnik())
  }, []);
  useAxiosInterceptors();

  return (
    <Container style={{display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    height: '100vh', backgroundColor: "#00FFFF"}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route
          element={<PrivateRouter isAllowed={userStatus === 'authenticated'} redirectPath="/" />}
        > */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* </Route> */}
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/news" element={<NovostiPage />} />
        <Route path="/legal" element={<LegalsPage />} />
        <Route path="/culture" element={<CulturesPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/accountmigrant" element={<MigrantAccountPage />} />
        <Route path="/lk" element={<AdminPage />} />





        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/news" />
        <Route path="/legal" />
        <Route path="/culture" />
        <Route path="/lesson" element={<LessonsPage />} />
        <Route path="/recomendation" element={<Recomendation />} />
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
