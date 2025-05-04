import styled from 'styled-components';

const IntroContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 100px 0px 140px 0px;
  background: top / cover no-repeat url(/src/assets/intro/bgIntro.png) #ffffff;
  max-height: 1440px;
  background-size: 100% 820px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 100px 0px;
  }
`;

const IntroTitle = styled.h2`
  margin: 0px;
  padding: 57px 0px 27px 0px;
  max-width: 606px;
  font-size: 60px;
  color: #08090a;
  line-height: 60px;
  letter-spacing: 1.8px;
  font-weight: 400;
  span {
    color: var(--color-accent);
  }
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const IntroText = styled.p`
  margin: 0px;
  padding: 0px 0px 53px 0px;
  max-width: 540px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.36px;
  @media (max-width: 1200px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const IntroButtonWrapper = styled.div`
  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 466px;
  }
`;

const IntroRating = styled.p`
  margin: 0px;
  padding: 10px 0px 0px 0px;
  font-size: 16px;
  color: #08090a;
  line-height: 20px;
  span {
    color: var(--color-accent);
  }
  @media (max-width: 1200px) {
    text-align: center;
    margin: 0 auto;
    padding: 0px 0px 40px 0px;
  }
`;

const IntroTrustpilot = styled.div`
  padding: 30px 0px 0px 0px;
  @media (max-width: 1200px) {
    text-align: center;
    padding-bottom: 10px;
  }
`;

const IntroDeliveryImage = styled.div`
  background: center/cover no-repeat url(/src/assets/intro/introDelivery.png);
  height: 580px;
  width: 600px;
  @media (max-width: 1200px) {
    margin-left: 80px;
  }
`;

export {
  IntroContainer,
  IntroTitle,
  IntroText,
  IntroButtonWrapper,
  IntroRating,
  IntroTrustpilot,
  IntroDeliveryImage,
};
