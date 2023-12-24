import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Components/reducer";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import SideBar from './Components/pages/Dashboard/SideBar';

const store= configureStore({
    reducer:rootReducer
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
         <BrowserRouter>
        <Provider store={store}>
       <App />
         <Toaster/>
        </Provider>
        </BrowserRouter>
       
        
         
    </React.StrictMode>
   
   
);

