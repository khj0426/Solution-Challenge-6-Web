//isLogin->state인데 상태값이 false

//localStorage에 토큰이 있는 지 확인

//토큰이 있으면 action 전달 -> 상태 true로 변경

// 토큰이 없거나 로그아웃으로 삭제한 경우 -> 상태 false로

import { legacy_createStore } from 'redux';

const LOGINCHECK = 'logincheck';
const LOGOUTCHECK = 'logoutcheck';

export const loginCheck = () => {
  return {
    type: LOGINCHECK,
  };
};

export const logoutCheck = () => {
  return {
    type: LOGOUTCHECK,
  };
};

type LoginCheckAction =
  | ReturnType<typeof loginCheck>
  | ReturnType<typeof logoutCheck>;

const initalStore = { isLogin: false, user: null };

const reducer = (state = initalStore, action: LoginCheckAction) => {
  switch (action.type) {
    case LOGINCHECK:
      return { ...state, isLogin: true };
    case LOGOUTCHECK:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

const userStore = legacy_createStore(reducer);

export default userStore;
