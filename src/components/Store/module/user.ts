import { createSlice } from '@reduxjs/toolkit';

export const loginCheck = (payload: string) => {
  return {
    type: LOGINCHECK,
    payload,
  };
};

export const logoutCheck = (payload: string) => {
  return {
    type: LOGOUTCHECK,
    payload,
  };
};

//초기 상태 값 저장
const initalStore = { isLogin: false, email: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: initalStore,
  reducers: {
    LOGINCHECK(state, action) {
      state.isLogin = true;
      state.email = action.payload;
    },
    LOGOUTCHECK(state) {
      state.isLogin = false;
      state.email;
    },
  },
});

export const { LOGINCHECK, LOGOUTCHECK } = userSlice.actions;
export default userSlice;
