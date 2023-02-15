import MenuCategory from '@/components/menu/MenuCategory';
import styled from '@emotion/styled';
import { BottomBlock } from '@/components/layout/BottomBlock';

export default function MenuScreen() {
  return (
    <StyledBox>
      <MenuCategory />
    </StyledBox>
  );
}

const StyledBox = styled(BottomBlock)`
  max-height: 100vh;
  overflow: auto;
`;
