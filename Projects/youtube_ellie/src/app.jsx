import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/vide_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&part=snippet &maxResults=25&key=AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((results) => setVideos(results))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCVxtND4l6jCAPpIj1dkCykF31V-ObiiJ0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  // []는 마운트 되었을때만 호출
  //  공란은 state나 prop이 업데이트 될때마다 호출
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
