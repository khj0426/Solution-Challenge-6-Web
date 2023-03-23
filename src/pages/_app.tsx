import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import newStore from '../components/Store/module';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
function App({ Component, pageProps }: AppProps) {
  const persistNewStore = persistStore(newStore);

  return (
    <>
      <Head>
        <title>Bep</title>
      </Head>
      <Provider store={newStore}>
        <PersistGate loading={null} persistor={persistNewStore}></PersistGate>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  );
}

export default App;
