import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from "./service/auth_service.js"
import firebaseApp from "./service/firebaseApp.js"
import ImageUploader from './service/upload_service';

const authService = new AuthService(firebaseApp);
const uploadService = new ImageUploader();


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploadService={uploadService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
