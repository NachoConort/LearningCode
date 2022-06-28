import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstSection from './FirstSection'
import SecondSection from './components/SecondSection';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirstSection />
    <SecondSection />
  </React.StrictMode>
);
