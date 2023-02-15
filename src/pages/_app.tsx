import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { Provider } from 'react-redux';
import newStore from '../components/Store/module';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={newStore}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
