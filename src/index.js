import React from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from "react-helmet-async";
import {Routes} from "./config/routes";
import {BrowserRouter} from "react-router-dom";


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <HelmetProvider>
              <Routes/>
          </HelmetProvider>
      </BrowserRouter>
  </React.StrictMode>
);
