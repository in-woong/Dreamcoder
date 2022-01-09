import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from "./service/auth_service.js"
import firebaseApp from "./service/firebaseApp.js"

const authService = new AuthService(firebaseApp);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
