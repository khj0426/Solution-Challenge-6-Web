import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalmodalState from './globalmodal';

const reducers = combineReducers({
  user: userSlice.reducer,
  globalModal: globalmodalState.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whilelist: ['user'],
  timeout: 3600000,
};

const persist = persistReducer(persistConfig, reducers);

const makeStore = () => {
  const store = configureStore({
    reducer: {
      persist,
    },
  });

  return store;
};

const newStore = makeStore();
export default newStore;
