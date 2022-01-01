import React, { useState, useEffect } from 'react';

import Header from './header';
import Videos from './videos';

const Search=()=> {
  const [input, setInput] = useState('');
  const [videos, setVideos] = useState([]);

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const baseURL = 'https://youtube.googleapis.com/youtube/v3/';
  const maxResults = 25;
  const key = 'AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0';

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${baseURL}${input ? 'search' : 'videos'}?part=snippet${
        input ? `&q=${input}` : '&chart=mostPopular'
      }&maxResults=${maxResults}&key=${key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }, [input]);
  return (
    <div className='youtube'>
      <Header setInput={setInput} formRef={formRef} inputRef={inputRef} />
      <Videos input={input} videos={videos} />
    </div>
  );
}

export default Search;
