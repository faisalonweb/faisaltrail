import React, { useEffect } from 'react';
import Layout from 'src/components/shared/Layout/Layout';
import HomeView from 'src/views/HomeView/HomeView';
import SignUpPage from 'src/components/common/Presentational/SignUpPage/SignUpPage';
import LoginPage from 'src/components/common/Presentational/LoginPage/LoginPage';
import ExplorePage from './components/common/Smart/Explore/Explore';
import TrailInfo from 'src/components/common/Smart/TrailInfo/TrailInfo';
import NotFoundPage from 'src/components/shared/NotFoundPage/NotFoundPage';
import TokenRestrictedRouter from 'src/components/hoc/TokenRestrictedRouter';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/routes/PrivateRoute';
import CssBaseline from '@mui/material/CssBaseline';
import Trails from './components/common/Smart/Trails/Trails';
import TrailDetail from './components/common/Presentational/TrailDetail/TrailDetail';
import './App.css';


function App() {
  useEffect(() => {
    const storeMe = {
      myBool: true
    }
    localStorage.setItem('test', JSON.stringify(storeMe))
    const initialState = localStorage.getItem('theme');
    if (!initialState) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div className='App'>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/trails' element={<Trails />} />
          <Route path='/trails/trail-info/:id' element={<TrailInfo />} />
          <Route path='/trails/trail-details/:id' element={<TrailDetail />} />
          <Route path="*"  element={<TokenRestrictedRouter component={PrivateRoute}/>}/>
          <Route path="/notpagefound" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
