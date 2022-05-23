import React from 'react';
import Layout from 'src/components/shared/Layout/Layout'
import HomeView from 'src/views/HomeView/HomeView'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
      <Route path="/" element={<HomeView />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
