import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MasterPage } from "./master.page";
import "antd/dist/antd.min.css";
import "./assets/styles/index.css";
import { PrivateRoute } from "./shared/private.route";
import { GlobalContextProvider } from "./shared/global.context.provider";
import { AuthManager } from "./pages/AuthManager";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthManager />} />
        </Routes>
        <PrivateRoute>
          <MasterPage />
        </PrivateRoute>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
