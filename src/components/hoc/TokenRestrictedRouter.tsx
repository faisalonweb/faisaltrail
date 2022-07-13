import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ElementType;
};
const TokenRestrictedRouter: React.FunctionComponent<PrivateRouteProps> = ({
  component: Component,
}) => {
  const result = JSON.parse(localStorage.getItem('test') || '{}');
  return result.myBool ? <Component /> : <Navigate to='/notpagefound' />;
};

export default TokenRestrictedRouter;
