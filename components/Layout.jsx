import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Simple from './Newsletter';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Simple/>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
