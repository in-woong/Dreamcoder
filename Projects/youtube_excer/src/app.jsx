import './app.css';
import React, { useState, useEffect } from 'react';
import Search from './pages/search';
import Video from './pages/video';
import Header from './components/search_header/search_header';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  const [input, setInput] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    props.youtube.getVideos(input).then((result) => {
      return setVideos(result.items);
    });
  }, [input]);
  return (
    <div className='App'>
      <Header input={input} setInput={setInput} />
      <Routes>
        <Route exact path='/' element={<Search videos={videos}/>}/>
        <Route path="/video" element={<Video videos={videos}/>}/>
      </Routes>
    </div>
  );
};

export default App;
