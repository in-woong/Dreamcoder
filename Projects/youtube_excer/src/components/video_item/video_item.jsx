import { memo } from 'react';
import { Link } from 'react-router-dom';
const video = (props) => {
  return (
    <li className='video_item'>
      <Link to={`/video/${props.video.id.videoId}`}>
        <img
          className='video_item_img'
          src={props.video.snippet.thumbnails.high.url}
          alt='thumbnails'
        />
        <section className='video_item_desc'>
          <h3 className='video_item_title'>{props.video.snippet.title}</h3>
          <span className='video_item_channel'>
            {props.video.snippet.channelTitle}
          </span>
        </section>
      </Link>
    </li>
  );
};

export default video;
