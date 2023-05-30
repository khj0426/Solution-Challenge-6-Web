import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const useUserPoint = () => {
  const [userPoint, setUserPoint] = useState<string>('');

  useEffect(() => {
    if (sessionStorage.getItem('accessToken') === null) {
      return () => {
        console.log('토큰이 존재하지 않습니다');
      };
    }

    const fetchUserPoint = async () => {
      try {
        const getUserPointData = await axios.get('/user-point', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        });
        setUserPoint(getUserPointData.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }
    };

    fetchUserPoint();
  }, []);

  return { userPoint };
};

export default useUserPoint;
