import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import globalmodalState from './globalmodal';
import sessionStorage from 'redux-persist/lib/storage/session';
import globalLatLng from './misson/latandlng';
import missonClearFlag from './misson/clearMisson';
import missonAnswer from './misson/answer';

const reducers = combineReducers({
  globalModal: globalmodalState.reducer,
  globalLatLng: globalLatLng.reducer,
  missonAns: missonAnswer.reducer,
  missonClear: missonClearFlag.reducer,
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
