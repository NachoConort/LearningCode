import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstSection from './components/FirstSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import ErrorScreen from './components/ErrorScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<FirstSection />}/>
       <Route path='about' element={<About />}/>
       <Route path='*' element= {<ErrorScreen />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
