import axios from 'axios';

const getAccessToken = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const getLoginToken = async () => {
    const res = await axios.post('https://bep-server.duckdns.org/login', {
      email: email,
      password: password,
    });
    console.log(res);
    return res;
  };
  const getSignInToken = async () => {
    const res = await axios.post('https://bepserver.duckdns.org/login/google', {
      email,
      name: username,
      password,
    });
    if (res.status === 200) {
      sessionStorage.setItem('accessToken', res.data.accessToken);
    }
  };

  if (sessionStorage.getItem('accessToken') && true) {
    return getLoginToken();
  }
  return getSignInToken();
};

export default getAccessToken;
