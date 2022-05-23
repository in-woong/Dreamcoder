import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service.js';
import firebaseApp from './service/firebaseApp.js';
import CardRepository from './service/card_repository.js';
import ImageUploader from './service/upload_service';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const uploadService = new ImageUploader();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      uploadService={uploadService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
