import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/taller5-innovaccion/">  {/* 👈 Agrega esto */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);