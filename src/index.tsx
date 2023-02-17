import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MasterPage } from './master.page'
import "antd/dist/antd.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MasterPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
