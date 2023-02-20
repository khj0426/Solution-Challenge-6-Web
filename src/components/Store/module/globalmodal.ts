import { createSlice } from '@reduxjs/toolkit';
const initalState = { modal: true };

const globalmodalState = createSlice({
  name: 'globalmodal',
  initialState: initalState,
  reducers: {
    active(state) {
      state.modal = true;
    },
    deactive(state) {
      state.modal = false;
    },
  },
});
export const { active, deactive } = globalmodalState.actions;
export default globalmodalState;
