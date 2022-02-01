import styles from './video_list.module.css';
import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = ({ videos, onClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            onClick={onClick}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
