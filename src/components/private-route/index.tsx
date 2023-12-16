import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const PrivateRoute = ({ element }: any) => {
  const { getStatus } = useAuth();
  return getStatus() ? element : <Navigate to={'/signin'} replace />;
};
