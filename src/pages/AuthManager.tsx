import { Login } from "../shared/components/auth/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../shared/auth.context";

export const AuthManager = () => {
  debugger;
  const auth = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  function setToken(value: any) {
    debugger;
    value.preventDefault();
    auth.signin(() => navigate(state ?? "/"));
  }

  return <Login setToken={setToken} />
};
