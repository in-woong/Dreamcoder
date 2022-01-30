import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleHabit from './simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
