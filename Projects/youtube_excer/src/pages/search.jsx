import React, { useState, useEffect } from 'react';
import Videos from '../components/video_list/video_list';

const Search = ({ videos }) => {
  return (
    <div className='youtube'>
      <Videos videos={videos} />
    </div>
  );
};

export default Search;
