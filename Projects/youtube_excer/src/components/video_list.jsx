import { memo } from 'react';
import Video from './video_item';
const videos = (props) => {
  return (
    <ul className='video_list'>
      {props.videos.map((video, index) => {
        return <Video video={video} key={index} />;
      })}
    </ul>
  );
};

export default videos;
