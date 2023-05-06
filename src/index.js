

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./dash.css"
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import USerProvider from "./Context/UseCotext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
     <USerProvider>
     <App />
     </USerProvider>
    
     
    </Router>
  </React.StrictMode>
);
