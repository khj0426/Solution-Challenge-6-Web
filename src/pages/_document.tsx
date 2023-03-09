import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Bep</title>
        <meta
          name="Bep"
          content="세상의 문제들의 인식개선을 돕기 위한 기부 플랫폼"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
