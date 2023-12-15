import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import NavBar from './components/ui/Navbar';
import { Container } from 'react-bootstrap';
import PrivateRouter from './components/HOC/PrivateRouter';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector((store) => store.authSlice.user.status);

  useEffect(() => {
    void dispatch(thunkCheckAuth());
  }, []);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<PrivateRouter isAllowed={userStatus === 'authenticated'} redirectPath='/'/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
