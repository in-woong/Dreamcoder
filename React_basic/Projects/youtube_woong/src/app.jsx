import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import IsLoading from './components/isLoading/isLoading';
import Search from './components/search_header/search';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

export default function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (text) => {
    setIsLoading(true);
    youtube.search(text).then((video) => {
      setVideos(video);
      setSelectedVideo(null);
      setIsLoading(false);
    });
  };

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  const goHome = () => {
    setSelectedVideo(null);
    youtube.mostPopular().then((video) => {
      setVideos(video);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    youtube.mostPopular().then((video) => {
      setVideos(video);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Search onSubmit={handleSubmit} goHome={goHome} />
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail selectedVideo={selectedVideo} />
            </div>
          )}
          <section className={styles.list}>
            <VideoList
              videos={videos}
              onClick={handleClick}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </section>
        </div>
      )}
    </div>
  );
}
