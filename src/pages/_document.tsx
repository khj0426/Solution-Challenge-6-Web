import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
class MyDocument extends Document {
  static async getInitalProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originRanderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originRanderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initalProps = await Document.getInitialProps(ctx);
      return {
        ...initalProps,
        styles: [initalProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Bep"
            content="세상의 문제들의 인식개선을 돕기 위한 기부 플랫폼"
          />
          <meta
            name="google-site-verification"
            content="g3Daim29whdK1ZzL1CE6pvkYyvSgM5-6C898-TVjiz0"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=geometry`}
          ></script>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
