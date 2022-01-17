import '../styles/globals.css';
import 'react-tippy/dist/tippy.css';
import '../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { Footer, Header } from '~/components/layout';
import { ThemeProvider } from 'next-themes';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // initialize react-axe
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV !== 'production'
    ) {
      const ReactDOM = require('react-dom');
      const axe = require('@axe-core/react');
      axe(React, ReactDOM, 1000);
    }
  });

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
