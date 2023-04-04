import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MasterPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<AuthManager />} />
          <Route path="*" element={<Navigate to="/categories" />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
