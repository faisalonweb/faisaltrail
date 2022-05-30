import React from 'react';
import Layout from 'src/components/shared/Layout/Layout'
import HomeView from 'src/views/HomeView/HomeView'
import SignUpPage from 'src/components/common/Presentational/SignUpPage/SignUpPage'
import LoginPage from 'src/components/common/Presentational/LoginPage/LoginPage'
import ExplorePage from './components/common/Smart/Explore/Explore';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Trails from './components/common/Smart/Trails/Trails';
import TrailDetail from './components/common/Presentational/TrailDetail/TrailDetail';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
      <Route path="/" element={<HomeView />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/trails" element={<Trails />} />
        <Route path="/trails/trail-details/:id" element={<TrailDetail />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
