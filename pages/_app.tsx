import React from "react";
import NextApp from "next/app";

import theme from "../theme/theme";
import { ThemeProvider } from "theme-ui";

import Layout from "../components/Layout";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
