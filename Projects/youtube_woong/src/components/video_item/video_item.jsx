import styles from './video_item.module.css';

const videoItem = ({ video, onClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const handleClick = () => {
    onClick(video);
  };

  return (
    <li className={`${styles.container} ${displayType}`} onClick={handleClick}>
      <div className={styles.video}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className={styles.thumbnail}
          alt='video thumbnail'
        />
        <div className={styles.metaData}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default videoItem;
