import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { clear: false };

type MissonClear = {
  clear: boolean;
};

const missonClearFlag = createSlice({
  name: 'missonClearFlag',
  initialState,
  reducers: {
    setMissonClear(state, action: PayloadAction<MissonClear>) {
      return {
        clear: action.payload.clear,
      };
    },

    setMissonNotClear() {
      return {
        clear: false,
      };
    },
  },
});

export const { setMissonClear, setMissonNotClear } = missonClearFlag.actions;
export default missonClearFlag;
