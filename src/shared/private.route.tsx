import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useGlobalContext from "./global.context.provider";
import { useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  debugger;
  const { isAuthenticated } = useGlobalContext();
  const location = useLocation();


  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ path: location.pathname}} />;
  }

  return children;
};
