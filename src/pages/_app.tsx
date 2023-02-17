import { CssBaseline, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { Bottom, Header } from '@/components/layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient, theme } from '@/config';
import Main from '@/components/layout/Main';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Body>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
            <Bottom />
          </ThemeProvider>
        </Body>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const Body = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
`;
