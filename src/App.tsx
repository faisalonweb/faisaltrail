import React, { useEffect } from 'react';
import Layout from 'src/components/shared/Layout/Layout';
import HomeView from 'src/views/HomeView/HomeView';
import SignUpPage from 'src/components/common/Presentational/SignUpPage/SignUpPage';
import LoginPage from 'src/components/common/Presentational/LoginPage/LoginPage';
import ExplorePage from './components/common/Smart/Explore/Explore';
import TrailInfo from 'src/components/common/Smart/TrailInfo/TrailInfo';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Trails from './components/common/Smart/Trails/Trails';
import TrailDetail from './components/common/Presentational/TrailDetail/TrailDetail';

function App() {
  useEffect(() => {
    const initialState = localStorage.getItem('theme')
    if(!initialState) {
      localStorage.setItem('theme', ('light'))
    }
  },[]);

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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
