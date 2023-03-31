import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "./global.context.provider";

export const PrivateRoute = (props: any) => {
  debugger;
  const globalContext = useContext(GlobalContext);

  return globalContext.globalState.token.length > 0 
    ? props.children  
    : <Navigate to="/login" />;
};
