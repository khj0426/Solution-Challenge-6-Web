import axios from 'axios';
const getAccessToken = ({ username }: { username: string }) => {
  const getToken = async () => {
    const res = await axios.post('', {});
    return res;
  };

  return getToken();
};

export default getAccessToken;
