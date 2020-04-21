import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Main } from './styles';
import Theme from './theme';
import HeaderGlobal from '@components/HeaderGlobal';
import Footer from '@components/Footer';

type LayoutProps = {
  title: string;
  description: string;
  keywords: string;
  image: string;
};

const Layout: React.FC<LayoutProps> = ({
  children, title, description, keywords, image,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon-mask.svg" color="#000000" />
        <link rel="preconnect" href="https://image.tmdb.org/" />
        <link rel="canonical" href={router.asPath} />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:image:width" content="780" />
        <meta name="twitter:image:height" content="439" />
        <meta name="twitter:site" content={router.asPath} />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:image" content={image} />
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
};

export default Layout;
