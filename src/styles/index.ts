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

  min-height: 72vh;
  padding: 40px;

  @media (min-width: 1080px) {
    min-height: 64vh;
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
  @media(max-width: 1080px){
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

  & p {
    margin: 24px auto;
    width: 56%;
    @media(max-width: 1440px){
    width: 80%;;
  }

  }
  @media(max-width: 1080px){
    width: 100%;;
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
  @media(max-width: 1080px){
    width: 100%;;
  }
`;

export const MetricsSection = styled.section`
  display: flex;
`;

export const TestimonialsSection = styled.section`
  display: flex;
`;

export const FaqSection = styled.section`
  display: flex;
`;

export const PurchaseSection = styled.section`
  display: flex;
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
`;
