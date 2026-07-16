import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Css
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'leaflet/dist/leaflet.css';
import './assets/fonts/flaticon/flaticon.css';
import './assets/fonts/font-awesome/css/all.min.css';
import './assets/css/style.css';
import './assets/css/brand.css';

createRoot(document.getElementById('acres')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
