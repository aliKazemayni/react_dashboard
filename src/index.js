import React from 'react';
import {createRoot} from 'react-dom/client';
import {cacheRtl, mainTheme} from "./themes/mainTheme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {HelmetProvider} from "react-helmet-async";
import {CacheProvider} from "@emotion/react";
import {Routes} from "./config/routes";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={mainTheme}>
                  <CssBaseline />
                  <HelmetProvider>
                      <Routes/>
                  </HelmetProvider>
              </ThemeProvider>
          </CacheProvider>
      </BrowserRouter>
  </React.StrictMode>
);
