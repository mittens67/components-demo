import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
