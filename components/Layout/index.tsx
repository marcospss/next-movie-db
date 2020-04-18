import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Main } from './styles';
import Theme from './theme';
import HeaderGlobal from '@components/HeaderGlobal';
import Footer from '@components/Footer';

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
      <Wrapper>
        <HeaderGlobal />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  </>
);

export default Layout;
