import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import router from "./Router/router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
