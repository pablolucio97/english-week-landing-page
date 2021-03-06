import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  & .headerScrolling {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 999;
    padding: 32px;
    transition: all 0.8s ease;
  }
  & .headerNotScrolling {
    background: transparent;
    transition: all 0.8s ease;
  }
  & .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  
  & .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }
  &.lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }
  & .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  & .drawerLink{
    margin: 8px auto;
  }
`;