import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstSection from './FirstSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<FirstSection />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
