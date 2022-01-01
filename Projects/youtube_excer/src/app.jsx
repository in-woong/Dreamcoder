import './app.css';
import React from 'react';
import Search from './components/search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
