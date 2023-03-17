import { requestInstance } from './instance/axios';

//토큰을 발급받는 함수

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
    const resData = await requestInstance({
      method: 'post',
      url: '/login',
      data: {
        email,
        password,
      },
    });

    if (resData.status === 200) {
      sessionStorage.setItem('accessToken', resData.data.accessToken);
    }
  };
  const getSignInToken = async () => {
    const resData = await requestInstance({
      method: 'post',
      url: '/login/google',
      data: {
        email,
        name: username,
        provider: 'google',
        password,
      },
    });

    if (resData.status === 200) {
      sessionStorage.setItem('accessToken', resData.data.accessToken);
      sessionStorage.setItem('userPoint',resData.data.userPoint);
    }
  };

  if (sessionStorage.getItem('accessToken') && true) {
    getLoginToken();
  }
  getSignInToken();
};

export { getAccessToken };
