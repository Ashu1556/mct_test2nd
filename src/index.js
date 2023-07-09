import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import myStore from "./Component/Redux/store";
import CustomProvider from "./Component/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <CustomProvider>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </Provider>
);
