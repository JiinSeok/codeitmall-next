import '@/styles/globals.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ThemeProvider } from '@/lib/ThemeContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
