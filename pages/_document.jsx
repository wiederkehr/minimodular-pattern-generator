import Document, { Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head></Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;600&display=swap" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
