import { CssBaseline, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { Header, Bottom } from '@/components/layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient, theme } from '@/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Styled>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Bottom />
          </ThemeProvider>
        </Styled>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const Styled = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
`;
