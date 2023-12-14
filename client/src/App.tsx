import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { useAppDispatch } from './redux/hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    void dispatch(thunkCheckAuth());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/lesson"  />
      <Route path="/recomendation"  />
      <Route path="/news"  />
      <Route path="/legal"  />
      <Route path="/culture"  />



    </Routes>
  );
}

export default App;
