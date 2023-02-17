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
    const res = await axios.post('http://34.82.77.224/login', {
      email: email,
      password: password,
    });
    console.log(res);
    return res;
  };
  const getSignInToken = async () => {
    const res = await axios.post('http://34.82.77.224/login/google', {
      email,
      name: username,
      password,
    });
    if (res.status === 200) {
      localStorage.setItem('accessToken', res.data.accessToken);
    }
  };

  if (localStorage.getItem('accessToken') && true) {
    return getLoginToken();
  }
  return getSignInToken();
};

export default getAccessToken;
