import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Provider store={store}>
       <App />
       <ToastContainer></ToastContainer>
       <Toaster></Toaster>
    </Provider>
    </BrowserRouter>
    
  
);
