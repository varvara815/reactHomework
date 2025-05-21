import React from 'react';
import UiButton from '../ui/button';
import {
  IntroContainer,
  IntroTitle,
  IntroText,
  IntroButtonWrapper,
  IntroRating,
  IntroTrustpilot,
  IntroDeliveryImage,
} from './intro.styled';

import { IntroProps } from '../../../custom';

const Intro = ({ showIntro }: IntroProps) => {
  return (
    <>
      <IntroContainer>
        <div>
          <IntroTitle>
            Beautiful food & takeaway, <span>delivered</span> to your door.
          </IntroTitle>
          <IntroText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </IntroText>
          <IntroButtonWrapper>
            <UiButton
              text='Place an Order'
              type='button'
              size='placeAnOrder'
              onClick={showIntro}
            />
          </IntroButtonWrapper>

          <IntroTrustpilot>
            <a href='#'>
              <img
                src='/src/assets/intro/trustpilot.svg'
                alt='Trustpilot'
              ></img>
            </a>
          </IntroTrustpilot>
          <IntroRating>
            <span>4.8 out of 5</span> based on 2000+ reviews
          </IntroRating>
        </div>

        <IntroDeliveryImage />
      </IntroContainer>
    </>
  );
};

export default Intro;
