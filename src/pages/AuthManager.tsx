import { useContext } from "react";
import { Login } from "../shared/components/auth/Login";
import { GlobalContext } from "../shared/global.context.provider";

export const AuthManager = () => {
  debugger;
  const globalContext = useContext(GlobalContext);

  function setToken(value: any) {
    debugger;

    globalContext.saveData({token: value})
  }

  return <Login setToken={globalContext.saveData} />
};
