import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/minimodules_logo_positive.png"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}