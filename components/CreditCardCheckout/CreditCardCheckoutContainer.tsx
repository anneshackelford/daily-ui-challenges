import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import CreditCardCheckoutBasket from './CreditCardCheckoutBasket';
import CreditCardCheckoutSteps from './CreditCardCheckoutSteps';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 74px 50px 0;
  text-align: center;

  > h1 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 85%;
    color: #ffffff;
    margin: 0;
  }
`;

const Progress = styled.div``;

const ProgressText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 56px;
  font-family: 'Switzer';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 85%;
  color: #ffffff;
  margin-top: 36px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 47px;
`;

const Line = styled.div`
  margin: 0;
  width: 100px;
  height: 0px;
  background-color: rgba(44, 121, 165, 0.3);
  border-bottom: 3px solid rgba(44, 121, 165, 0.3);
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 92px;
  gap: 28px;
  @media screen and (min-width: 1700px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Page1ImageDark = styled.img<{ page: number }>`
  display: ${(props) => (props.page === 1 ? 'block' : 'none')};
`;

const Page1ImageLight = styled.img<{ page: number }>`
  display: ${(props) => (props.page !== 1 ? 'block' : 'none')};
`;
const Page2ImageDark = styled.img<{ page: number }>`
  display: ${(props) => (props.page === 2 ? 'block' : 'none')};
`;

const Page2ImageLight = styled.img<{ page: number }>`
  display: ${(props) => (props.page !== 2 ? 'block' : 'none')};
`;
const Page3ImageDark = styled.img<{ page: number }>`
  display: ${(props) => (props.page === 3 ? 'block' : 'none')};
`;

const Page3ImageLight = styled.img<{ page: number }>`
  display: ${(props) => (props.page !== 3 ? 'block' : 'none')};
`;

const CreditCardCheckoutContainer = () => {
  const { page } = useContext(CreditCardCheckoutContext);

  return (
    <Main>
      <h1>We&apos;re almost there</h1>
      <Progress>
        <Images>
          <Page1ImageDark src='/images/ellipseDark.svg' page={page} />
          <Page1ImageLight src='/images/ellipseLight.svg' page={page} />
          <Line />
          <Page2ImageDark src='/images/ellipseDark.svg' page={page} />
          <Page2ImageLight src='/images/ellipseLight.svg' page={page} />
          <Line />
          <Page3ImageDark src='/images/ellipseDark.svg' page={page} />
          <Page3ImageLight src='/images/ellipseLight.svg' page={page} />
        </Images>
        <ProgressText>
          <span>Shipping</span>
          <span>Payment</span>
          <span>Ordering</span>
        </ProgressText>
      </Progress>
      <OrderContainer>
        <CreditCardCheckoutSteps />
        <CreditCardCheckoutBasket />
      </OrderContainer>
    </Main>
  );
};

export default CreditCardCheckoutContainer;
