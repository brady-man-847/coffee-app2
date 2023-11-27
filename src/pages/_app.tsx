import { Bottom, Header, Main } from '@/components/layout';
import { theme } from '@/config';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../styles/App.css';
import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function RootApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: 0, refetchOnWindowFocus: false },
        },
      }),
  );

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Header />
        <Main>{page}</Main>
        <Bottom />
      </>
    ));

  return (
    <>
      <Box
        sx={[
          {
            width: '100%',
            margin: '0 auto',
            height: '100vh',
            overflowY: 'hidden',
            maxWidth: '500px',
          },
          () => ({ boxShadow: `2px -2px 83px 60px ${theme.palette.grey[100]}` }),
        ]}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>{getLayout(<Component {...pageProps} />)}</QueryClientProvider>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default RootApp;
