import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstSection from './FirstSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirstSection />
  </React.StrictMode>
);
