import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyFavorites from 'src/components/common/Presentational/MyFavorites/MyFavorites';
import ChangePassword from 'src/components/common/Presentational/ChangePassword/ChangePassword';
import Help from 'src/components/common/Smart/Help/Help';

const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/myfavorites' element={<MyFavorites />} />
        <Route path='/help' element={<Help />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='*' element={<Navigate to='/notpagefound' replace />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
