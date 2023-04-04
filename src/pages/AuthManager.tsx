import { useContext } from "react";
import { Login } from "../shared/components/auth/Login";
import useGlobalContext from "../shared/global.context.provider";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthManager = () => {
  debugger;
  const globalContext = useGlobalContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  function setToken(value: any) {
    
    debugger;
    value.preventDefault();
    globalContext.login().then(() => {
      navigate(state?.path || "/categories");
    })
  }

  return <Login setToken={setToken} />
};
