import { useEffect, useState } from 'react';
import styles from './app.module.css';

import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const goHome = () => {
    setSelectedVideo(null);
  };

  const search = (query) => {
    setIsLoading(true);
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    youtube
      .mostPopular() //
      .then((videos) => {
        setIsLoading(false);
        setVideos(videos);
      });
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} goHome={goHome} />
      {!isLoading ? (
        <div className={styles.content}>
          {selectedVideo && (
            <section className={styles.detail}>
              <VideoDetail selectedVideo={selectedVideo} />
            </section>
          )}
          <section className={styles.list}>
            <VideoList
              videos={videos}
              selectVideo={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </section>
        </div>
      ) : (
        <h1 className={styles.loading}>IsLoading</h1>
      )}
    </div>
  );
}

export default App;
