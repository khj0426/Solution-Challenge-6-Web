import axios from 'axios';
export const getNewMisson = async ({ id }: { id: string }) => {
  const { data, status } = await axios.get(`api/main/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Cache-Control': 'max-age=60', // 1분으로 설정
    },
  });

  return { data, status };
};
