import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ElementType;
};
const TokenRestrictedRouter: React.FunctionComponent<PrivateRouteProps> = ({
  component: Component,
}) => {
  const result = localStorage.getItem('token');
  return result ? <Component /> : <Navigate to='/Signup' />;
};

export default TokenRestrictedRouter;
