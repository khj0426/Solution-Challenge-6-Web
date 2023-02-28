import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import globalmodalState from './globalmodal';
import sessionStorage from 'redux-persist/lib/storage/session';
import globalLatLng from './latandlng';

const reducers = combineReducers({
  user: userSlice.reducer,
  globalModal: globalmodalState.reducer,
  globalLatLng: globalLatLng.reducer,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whilelist: ['user'],
  timeout: 1800000,
};

const persist = persistReducer(persistConfig, reducers);

const makeStore = () => {
  const store = configureStore({
    reducer: {
      persist,
    },
    middleware: (defaultMiddleware) =>
      defaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
};

const newStore = makeStore();
export default newStore;

export type RootState = ReturnType<typeof reducers>;
