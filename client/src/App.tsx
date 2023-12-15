import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkLoadRec, thunkLoadUsers } from './redux/slices/recpmindation/createAsyncThunks';
import Recomendation from './components/pages/Recomendation';
import useAxiosInterceptors from './customHooks/useAxiosInterceptors';
import NavBar from './components/ui/Navbar';
import PrivateRouter from './components/HOC/PrivateRouter';
import AccountPage from './components/pages/AccountPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector((store) => store.authSlice.user.status);

  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkLoadRec());
    void dispatch(thunkLoadUsers())
  }, []);
  useAxiosInterceptors();

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lk" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/lesson" />
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/news" />
        <Route path="/legal" />
        <Route path="/culture" />
      </Routes>
    </Container>
  );
}

export default App;
