import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//초기 상태 값 저장
const initalStore = { isLogin: false, email: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: initalStore,
  reducers: {
    LOGINCHECK(state, action: PayloadAction<string>) {
      return {
        ...state,
        isLogin: true,
        email: action.payload,
      };
    },
    LOGOUTCHECK(state) {
      return {
        ...state,
        isLogin: false,
        email: '',
      };
    },
  },
});

export const { LOGINCHECK, LOGOUTCHECK } = userSlice.actions;
export default userSlice;
