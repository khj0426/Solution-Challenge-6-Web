import axios from 'axios';
export const getNewMisson = async ({ id }: { id: string }) => {
  const { data, status } = await axios.get(`api/main/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });

  return { data, status };
};
