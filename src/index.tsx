import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MasterPage } from "./master.page";
import "antd/dist/antd.min.css";
import "./assets/styles/index.css";
import { PrivateRoute } from "./shared/private.route";
import { ProvideGlobalContext } from "./shared/global.context.provider";
import { AuthManager } from "./pages/AuthManager";
import { ProvideAuth } from "./shared/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <ProvideGlobalContext>
        <BrowserRouter>
          <Routes>
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <MasterPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<AuthManager />} />
          </Routes>
        </BrowserRouter>
      </ProvideGlobalContext>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);
