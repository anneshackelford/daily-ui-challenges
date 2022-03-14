import styled, { css } from 'styled-components';
import CreditCardCheckoutInformation from './CreditCardCheckoutInformation';

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

const Basket = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (min-width: 1700px) {
    display: flex;
  }
`;

const Summary = styled.div`
  width: 300px;
  height: 567px;
  background: rgba(248, 248, 248, 0.6);
  border-radius: 20px;
  @media screen and (min-width: 540px) {
    width: 482px;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    width: 482px;
    height: 567px;
  }
`;

const Button = styled.a`
  width: 117px;
  height: 55px;
  background: #2c79a5;
  border-radius: 20px;
  margin: 13px 0 0 0;
  display: flex;
  justify-content: center;
`;

const ButtonText = styled.p`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

const CreditCardCheckoutContainer = () => {
  return (
    <Main>
      <h1>We&apos;re almost there</h1>
      <Progress>
        <Images>
          <img src='/images/ellipseDark.svg' />
          <Line />
          <img src='/images/ellipseLight.svg' />
          <Line />
          <img src='/images/ellipseLight.svg' />
        </Images>
        <ProgressText>
          <span>Shipping</span>
          <span>Payment</span>
          <span>Ordering</span>
        </ProgressText>
      </Progress>
      <OrderContainer>
        <CreditCardCheckoutInformation />
        <Basket>
          <Summary></Summary>
          <Button>
            <ButtonText>Next</ButtonText>
          </Button>
        </Basket>
      </OrderContainer>
    </Main>
  );
};

export default CreditCardCheckoutContainer;
