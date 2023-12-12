import styled from '@emotion/styled';
import { BOTTOM_HEIGHT } from '@/components/layout/Bottom';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Main({ children }: Props) {
  return <Div bottomHeight={BOTTOM_HEIGHT}>{children}</Div>;
}

const Div = styled.div<{ bottomHeight: number }>`
  height: 100%;
  overflow: auto;
  padding-bottom: ${(props) => props.bottomHeight}px;
  display: flex;
  flex-direction: column;
`;
