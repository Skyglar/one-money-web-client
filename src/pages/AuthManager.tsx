import { useState } from "react";
import { Login } from "../shared/components/auth/Login";

export const AuthManager = () => {
  const [token, setToken] = useState();

  return (
    <>
      <Login setToken={setToken} />
    </>
  );
};
