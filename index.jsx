import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n/config'; // Import the i18n configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
