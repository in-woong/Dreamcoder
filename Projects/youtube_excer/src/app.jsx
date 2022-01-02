import './app.css';
import React, { useState } from 'react';
import Search from './pages/search';
import Video from './pages/video';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [input, setInput] = useState('');
  return (
    <div className='App'>
      <Header input={input} setInput={setInput} />
      <Routes>
        <Route path='/' element={<Search input={input}/>}/>
        <Route path="/video" element={<Video/>}/>
      </Routes>
    </div>
  );
};

export default App;
