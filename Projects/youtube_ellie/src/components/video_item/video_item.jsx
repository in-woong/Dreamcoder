import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={video.thumbnails.medium.url}
        alt='video thumbnail'
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{video.title}</p>
        <p className={styles.channel}>{video.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
