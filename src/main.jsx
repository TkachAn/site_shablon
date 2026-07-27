//main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { ScrollToTop } from './pages/layout/forSideBar/scrol.js';
import ScrollToTopButton from './components/elements/buttons/button_Up';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <ScrollToTopButton />
    </BrowserRouter>
  </StrictMode>,
);
