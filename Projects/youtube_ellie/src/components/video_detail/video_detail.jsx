import React from 'react';
import styles from"./video_detail.module.css"

const VideoDetail = ({ selectedVideo }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title={`${selectedVideo.snippet.title}`}
        id={selectedVideo.id}
        type='text/html'
        width='720'
        height='405'
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameborder='0'
        allowfullscreen
      ></iframe>
      <h2>{`${selectedVideo.snippet.title}`}</h2>
      <h4>{`${selectedVideo.snippet.channelTitle}`}</h4>
      <pre className={styles.description}>{`${selectedVideo.snippet.description}`}</pre>
    </section>
  );
};

export default VideoDetail;
