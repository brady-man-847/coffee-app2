import { Bottom, Header, Main } from '@/components/layout';
import { queryClient, theme } from '@/config';
import styled from '@emotion/styled';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/App.css';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box
        sx={[
          {
            width: '100%',
            margin: '0 auto',
            height: '100vh',
            overflowY: 'hidden',
            maxWidth: '500px',
          },
          (theme) => ({ boxShadow: `2px -2px 83px 60px ${theme.palette.grey[100]}` }),
        ]}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <Main>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </Main>
          <Bottom />
        </ThemeProvider>
      </Box>
    </>
  );
}

const Body = styled.div``;
