import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import { Normalize } from './normalize';
import { Container } from './styles';
import HeaderGlobal from 'components/HeaderGlobal';
import Footer from 'components/Footer';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = '' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider theme={Theme}>
      <Normalize />
      <Container>
        <HeaderGlobal />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  </>
);

export default Layout;
