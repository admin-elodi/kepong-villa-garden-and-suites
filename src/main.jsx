// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { init } from '@emailjs/browser';
import App from './App.jsx';
import './index.css';

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);