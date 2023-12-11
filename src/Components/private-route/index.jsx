import { Navigate } from 'react-router-dom';
import { authStatus } from '../../utils/auth.js';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ element }) => {
  const { getStatus } = authStatus();
  return getStatus() ? element : <Navigate to={'/'} replace />;
};
