import React from 'react';
import {createRoot} from 'react-dom/client';
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainLayout>
          <HomePage/>
      </MainLayout>
  </React.StrictMode>
);
