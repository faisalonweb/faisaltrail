import React, { useEffect } from 'react';
import Layout from 'src/components/shared/Layout/Layout';
import HomeView from 'src/views/HomeView/HomeView';
import SignUpPage from 'src/components/common/Presentational/SignUpPage/SignUpPage';
import LoginPage from 'src/components/common/Presentational/LoginPage/LoginPage';
import ExplorePage from './components/common/Smart/Explore/Explore';
import NotFoundPage from 'src/components/shared/NotFoundPage/NotFoundPage';
import ForgotPassword from 'src/components/common/Presentational/ForgotPassword/ForgotPassword';
import TokenRestrictedRouter from 'src/components/hoc/TokenRestrictedRouter';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/routes/PrivateRoute';
import CssBaseline from '@mui/material/CssBaseline';
import TrailDetail from './components/common/Presentational/TrailDetail/TrailDetail';
import TrailInfo from 'src/components/common/Smart/TrailInfo/TrailInfo';
import Trails from 'src/components/common/Smart/Trails/Trails';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  useEffect(() => {
    const storeMe = {
      myBool: false,
    };
    localStorage.setItem('test', JSON.stringify(storeMe));
    const initialState = localStorage.getItem('theme');
    if (!initialState) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div className='App'>
      <ToastContainer />
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/trails/trail-details/:id' element={<TrailDetail />} />
          <Route path='/trails' element={<Trails />} />
          <Route path='/trails/trail-info/:id' element={<TrailInfo />} />
          <Route path='*' element={<TokenRestrictedRouter component={PrivateRoute} />} />
          <Route path='/notpagefound' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
