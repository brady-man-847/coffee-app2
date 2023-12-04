import styled from '@emotion/styled';
import { BOTTOM_HEIGHT } from '@/components/layout/Bottom';
import { HEADER_HEIGHT } from '@/components/layout/Header';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function ({ children }: Props) {
  return (
    <Div headerHeight={HEADER_HEIGHT} bottomHeight={BOTTOM_HEIGHT}>
      {children}
    </Div>
  );
}

const Div = styled.div<{ bottomHeight: number; headerHeight: number }>`
  height: 100vh;
  overflow: auto;
  padding-bottom: ${(props) => props.bottomHeight}px;
  padding-top: ${(props) => props.headerHeight}px;
`;
