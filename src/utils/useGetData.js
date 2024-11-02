import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetData = url => {
  const [resData, setResData] = useState({
    status: 'pending',
    data: [],
  });

  const getData = async () => {
    const res = await axios.get(url);
    if (res.status === 200) {
      setResData({
        status: 'idle',
        data: res.data,
      });
    } else {
      setResData({
        status: 'error',
        data: [],
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return resData;
};

export default useGetData;
