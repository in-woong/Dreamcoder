import { memo } from 'react';
import Video from './video';
const videos = (props) => {
  return (
    <ul className='video_list'>
      {props.videos.map((video) => {
        return <Video video={video} key={video.id} />;
      })}
    </ul>
  );
};

export default videos;
