import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "./auth.context";

export const PrivateRoute = ({ children }: any) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace state={{ path: location.pathname}} />;
  }

  return children;
};
