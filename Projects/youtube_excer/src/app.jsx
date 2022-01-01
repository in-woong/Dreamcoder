import './app.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const baseURL = 'https://youtube.googleapis.com/youtube/v3/';
  const maxResults = 25;
  const key = 'AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0';
  const URL =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0';

  const onSubmit = (event) => {
    event.preventDefault();
    const search = inputRef.current.value;
    setInput(search);
    formRef.current.reset();
  };

  console.log(typeof input);

  useEffect(() => {
    setIsLoading(true);
    console.log('true', isLoading);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    console.log(
      input,
      `${baseURL}${input ? 'search' : 'videos'}?part=snippet${
        input ? `&q=${input}` : '&chart=mostPopular'
      }&maxResults${maxResults}&key=${key}`
    );
    fetch(
      `${baseURL}${input ? 'search' : 'videos'}?part=snippet${
        input ? `&q=${input}` : '&chart=mostPopular'
      }&maxResults=${maxResults}&key=${key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));

    setIsLoading(false);
    console.log('false', isLoading);
  }, [input]);

  return (
    <>
      <header className='header'>
        <FontAwesomeIcon icon={faYoutube} size='3x' />
        <span>Youtube</span>
        <form className='search-form' ref={formRef}>
          <input ref={inputRef} type='text' placeholder='Search..' />
          <button onClick={onSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </header>
      <main className='main'>
        <ul>
          {!isLoading ? (
            videos.map((video) => (
              <li key={video.id}>
                <h3>{video.snippet.title}</h3>
                <img src={video.snippet.thumbnails.default.url} alt="thumbnails"/>
              </li>
            ))
          ) : (
            <span>Loading</span>
          )}
        </ul>
      </main>
    </>
  );
}

export default App;
