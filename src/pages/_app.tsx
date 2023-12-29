import { theme } from '@/config';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../styles/App.css';
import { ReactElement, ReactNode, useState } from 'react';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import WithAxios from '@/components/common/WithAxios';
import Header from '@/components/layout/Header';
import Bottom from '@/components/layout/Bottom';
import Main from '@/components/layout/Main';

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
            // overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          },
          () => ({ boxShadow: `2px -2px 83px 60px ${theme.palette.grey[100]}` }),
        ]}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <WithAxios>
            <RecoilRoot>
              <QueryClientProvider client={queryClient}>{getLayout(<Component {...pageProps} />)}</QueryClientProvider>
            </RecoilRoot>
          </WithAxios>
        </ThemeProvider>
      </Box>
      <style jsx>{`
        :global(.MuiDialogContent-root) {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        :global(.MuiDrawer-root > .MuiPaper-root) {
          max-width: 500px;
        }
        :root {
          @supports (-webkit-touch-callout: none) {
            height: inherit;
          }
        }
      `}</style>
    </>
  );
}

export default RootApp;
