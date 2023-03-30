import { RouteConfig } from "./shared/route.config";
import { Menu } from "./shared/components/menu/Menu";
import "./assets/styles/App.scss";
import { useState } from "react";
import { Login } from "./shared/components/auth/Login";

export const MasterPage = () => {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken}/>
  // }

  return (
    <div className="App">
      <Menu />
      <main>
        <RouteConfig currentLanguage="" webApiLocale="" />
      </main>
    </div>
  );
};
