import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ selectedVideo }) => {
  console.log(selectedVideo);
  return (
    <section className={styles.detail}>
      <iframe
        title={`${selectedVideo.snippet.title}`}
        id={selectedVideo.id}
        type='text/html'
        width='100%'
        height='405'
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>{`${selectedVideo.snippet.title}`}</h2>
      <h4>{`${selectedVideo.snippet.channelTitle}`}</h4>
      <pre
        className={styles.description}
      >{`${selectedVideo.snippet.description}`}</pre>
    </section>
  );
};

export default VideoDetail;
