import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  background: -webkit-linear-gradient(-27deg, rgb(55, 9, 242), rgb(17, 17, 17));
  background: linear-gradient(-27deg, rgb(55, 9, 242), rgb(17, 17, 17));
`;

export const BannerSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;

  min-height: 100vh;
  padding: 40px;

  @media (min-width: 1080px) {
    min-height: 80vh;
  }
  @media (min-width: 720px) {
    min-height: 48vh;
  }

  & h1 {
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    color: ${({ theme }) => theme.colors.white100};
    width: 64%;
    text-align: center;
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.xhuge};
      width: 88%;
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.xxlarge};
      width: 88%;
    }
  }
  & h3 {
    font-size: ${({ theme }) => theme.sizes.huge};
    color: ${({ theme }) => theme.colors.silver200};
    width: 80%;
    text-align: center;
    margin: 24px auto -40px;
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.xlarge};
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.medium};
    }
  }

  & button {
    margin: 80px auto 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white100};
    box-shadow: 0 0 160px 1px ${({ theme }) => theme.colors.background_primary};
  }
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white100};
  min-height: 80vh;
  padding: 40px;
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 64%;
  padding: 40px;

  & h1{
    margin: 0 auto;
    text-align: center;
  }

  & p {
    margin: 24px auto;
    width: 56%;
    @media (max-width: 1440px) {
      width: 88%;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 720px) {
    padding: 0;
  }
`;
export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36%;
  & img {
    filter: drop-shadow(4px 4px 4px black);
    margin-bottom: -80px;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const ForWhomSection = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  background: -webkit-linear-gradient(
    -27deg,
    rgb(70, 88, 245),
    rgb(245, 70, 79)
  );
  background: linear-gradient(-27deg, rgb(70, 88, 245), rgb(245, 70, 79));
  min-height: 80vh;
  padding: 40px;
  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const ForWhomSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

export const ForWhomSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 64%;
  padding: 40px;
  
  & p {
    margin: 24px 12px;
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 1440px) {
      width: 80%;
    }
  }
  & h1 {
    margin: 24px 12px;
    color: ${({ theme }) => theme.colors.white100};
    @media (max-width: 1440px) {
      width: 88%;
      text-align: center;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    padding: 24px;
  }
`;
export const ForWhomSectionImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36%;
  & img {
    filter: drop-shadow(2px 4px 4px black);
    margin-bottom: -80px;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const ForWhomListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 4px;
`;

export const ForWhomListItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin: 8px auto;
  justify-content: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }

  & p {
    text-align: center;
  }
`;

export const SubscribeSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 64vh;
  background-color: ${({ theme }) => theme.colors.white100};
  padding: 40px;
`;

export const SubscribeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 1900px;
  margin: 0 auto;

  @media(max-width: 720px){
    width: 100%;
  }

  & h1 {
    margin: 24px auto 0;
    text-align: center;
  }
  & h3 {
    margin: 24px auto;
  }

  & button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white100};
    box-shadow: 0 0 80px 1px ${({ theme }) => theme.colors.secondary_light};
    margin: 40px auto;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 720px) {
      width: 92%;
      margin: 0 auto;
    }

  h1 {
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    color: ${({ theme }) => theme.colors.white100};
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.sizes.xxlarge};
    }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.xlarge};
    }
  }
`;
export const TimerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;

  p {
    font-weight: bold;
  }

  @media(max-width: 720px){
    margin: 8px;
  }
`;
export const TimerNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 4px;
  @media (max-width: 1080px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 720px) {
    width: 56px;
    height: 56px;
  }
`;
/* 
export const FaqSection = styled.section`
display: flex;
`;

export const PurchaseSection = styled.section`
display: flex;
`;

export const FaqSectionSectionContainer = styled.div`
display: flex;
`;

export const PurchaseSectionSectionContainer = styled.div`
display: flex;
`; */
