import React, { useState, useEffect } from 'react';
import Videos from '../components/video_list';

const Search = (props) => {
  const [videos, setVideos] = useState([]);

  const baseURL = 'https://youtube.googleapis.com/youtube/v3/';
  const maxResults = 25;
  const key = 'AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0';

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${baseURL}${props.input ? 'search' : 'videos'}?part=snippet${
        props.input ? `&q=${props.input}` : '&chart=mostPopular'
      }&maxResults=${maxResults}&key=${key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }, [props.input]);
  
  return (
    <div className='youtube'>
      <Videos input={props.input} videos={videos} />
    </div>
  );
};

export default Search;
