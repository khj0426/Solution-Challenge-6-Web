import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });

  return store;
};

const newStore = makeStore();
export default newStore;
