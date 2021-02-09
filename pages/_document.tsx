import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/minimodular_logo_positive.svg">
          </link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com">
          </link>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&family=Source+Serif+Pro:wght@400;600;700&display=swap"
            rel="stylesheet">
          </link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
