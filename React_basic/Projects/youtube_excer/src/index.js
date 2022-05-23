import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube.js';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App youtube={youtube} />
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);
