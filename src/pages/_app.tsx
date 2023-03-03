import { CssBaseline, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import type { AppProps } from 'next/app';
import { Bottom, Header, Main } from '@/components/layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient, theme } from '@/config';
import '../styles/App.css';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <Body>
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
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
`;
