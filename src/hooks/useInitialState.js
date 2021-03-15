import { useState, useEffect } from 'react';
import axios from 'axios';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    axios.get(API).then((data) => {
      setVideos(data.data.initalState);
    });
  }, []);
  return videos;
};

export default useInitialState;
