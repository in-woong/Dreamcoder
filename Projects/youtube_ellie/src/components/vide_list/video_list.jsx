import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';
const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem video={video.snippet} key={video.id} />
    ))}
  </ul>
);

export default VideoList;
