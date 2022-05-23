import { memo } from 'react';
import Video from '../video_item/video_item';
const videos = (props) => {
  return (
    <ul className='video_list'>
      {props.videos.map((video, index) => (
        <Video video={video} key={index} />
      ))}
    </ul>
  );
};

export default videos;
