import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import axios from "axios";
import Youtube from './service/youtube.js';

const HTTPClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(HTTPClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
