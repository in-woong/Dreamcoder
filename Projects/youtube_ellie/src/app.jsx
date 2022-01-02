import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/vide_list/video_list';

function App() {
  const [videos, setVideos] =useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])
  // []는 마운트 되었을때만 호출
  //  공란은 state나 prop이 업데이트 될때마다 호출
  return <VideoList videos={videos} />
}

export default App;
