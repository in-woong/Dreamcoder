const video = () => {
  return (
    <iframe
    title={video.title}
      id='player'
      type='text/html'
      width='640'
      height='360'
      src='http://www.youtube.com/embed/TT6KRHoimiQ?enablejsapi=1&origin=http://example.com'
      frameborder='0'
    ></iframe>
  );
};

export default video;
