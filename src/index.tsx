import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MasterPage } from "./master.page";
import "antd/dist/antd.min.css";
import "./assets/styles/index.css";
import { PrivateRoute } from "./shared/private.route";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivateRoute>
        <MasterPage />
      </PrivateRoute>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
