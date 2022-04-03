import { useContext } from 'react';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import BackIcon from '../icons/BackIcon';
import NextIcon from '../icons/NextIcon';

const Basket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  gap: 15px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const ButtonMixin = css`
  width: 117px;
  height: 55px;
  background: #2c79a5;
  border-radius: 20px;
  margin: 13px 0 0 0;
  display: flex;
  justify-content: center;
`;

const BackButton = styled.a`
  ${ButtonMixin}
  background-color: ${(props) => (props.page === 1 ? '#C0D7E4' : '#2c79a5')};
  cursor: ${(props) => (props.page === 1 ? 'default' : 'pointer')};
  > div > span {
    color: ${(props) =>
    props.page === 1 ? '#2c79a5' : 'rgba(255, 255, 255, 0.8)'};
  }
  > div > svg > path {
    fill: ${(props) =>
    props.page === 1 ? '#2c79a5' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const NextButton = styled.a`
  ${ButtonMixin}
  background-color: ${(props) => (props.page === 3 ? '#C0D7E4' : '#2c79a5')};
  cursor: ${(props) => (props.page === 3 ? 'default' : 'pointer')};
  > div > span {
    color: ${(props) =>
    props.page === 3 ? '#2C79A5' : 'rgba(255, 255, 255, 0.8)'};
  }
  > div > svg > path {
    fill: ${(props) =>
    props.page === 3 ? '#2C79A5' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  > span {
    margin-right: 6px;
  }
  > img {
    margin-top: 2px;
  }
`;

// const BackButtonText = styled.div<Props>`
//   ${ButtonTextMixin}
//   display: ${(props) => (props.page === 1 ? 'none' : 'flex')};
// `;

// const NextButtonText = styled.div<Props>`
//   ${ButtonTextMixin}
//   display: ${(props) => (props.page === 3 ? 'none' : 'flex')};
// `;

const Summary = styled.div`
  padding: 52px 0 36px;
  background: rgba(248, 248, 248, 0.6);
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: 540px) {
    width: 482px;
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-bottom: 44px;
  margin: 6px 12px 0 25px;
  @media screen and (min-width: 540px) {
    flex-direction: row;
    margin: 6px 22px 0 35px;
  }
`;

const ItemHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  > h2 {
    margin: 0px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.8);
  }

  > p {
    margin-top: 0px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
  }

  > p:last-of-type {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: right;

    color: rgba(0, 0, 0, 0.8);
  }
`;
const ItemVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin: 0;
  > img {
    align-self: center;
  }
  > p {
    margin: -15px 0 0 16px;
  }
  > p:last-of-type {
    margin: 4px 0 0 16px;
  }
`;

const Label = styled.p`
  margin: 4px 0 0 10px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.8);
`;

const Cost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: 0 40px;
  gap: 14px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;

  color: rgba(0, 0, 0, 0.5);

  > div:last-of-type {
    margin-left: 21px;
  }

  @media screen and (min-width: 540px) {
    margin: 0 50px;
  }
`;

const Total = styled.div`
  margin: 24px 40px 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  > div > p {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;

    color: rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 540px) {
    margin: 24px 50px 0;
  }
`;

const Title = styled.div`
  margin: 0 40px;
  @media screen and (min-width: 540px) {
    margin: 0 54px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;


const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

const CreditCardCheckoutBasket = () => {
  const { page, clickBack, clickNext } = useContext(CreditCardCheckoutContext);

  return (
    <Basket>
      <Summary>
        <Title>
          <ItemHorizontal>
            <h2>Order</h2>
            <img src='/images/exportIcon.png' height={18} width={18} />
          </ItemHorizontal>
        </Title>
        <Items>
          <ItemVertical>
            <img src='/images/dualSenseController.png' />
            <Label>DualSense Controller</Label>
            <Label>
              <b>69,99€</b>
            </Label>
          </ItemVertical>
          <ItemVertical>
            <img src='/images/pulse3dHeadset.png' />
            <Label>PULSE 3d Headset</Label>
            <Label>
              <b>99,99€</b>
            </Label>
          </ItemVertical>
        </Items>
        <Cost>
          <ItemHorizontal>
            <Label>DualSense Controller</Label>
            <Label>
              <b>69,99€</b>
            </Label>
          </ItemHorizontal>
          <ItemHorizontal>
            <Label>PULSE 3d Headset</Label>
            <Label>
              <b>99,99€</b>
            </Label>
          </ItemHorizontal>
          <ItemHorizontal>
            <Label>Taxes</Label>
            <Label>
              <b>20%</b>
            </Label>
          </ItemHorizontal>
          <ItemHorizontal>
            <Label>Standard Shipping</Label>
            <Label>
              <b>4,95€</b>
            </Label>
          </ItemHorizontal>
        </Cost>
        <Total>
          <ItemHorizontal>
            <Label>Total</Label>
            <Label>
              <b>169,99€</b>
            </Label>
          </ItemHorizontal>
        </Total>
      </Summary>
      <Buttons>
        <BackButton onClick={clickBack} page={page}>
          <ButtonText>
            <BackIcon />
            <span>Back</span>
          </ButtonText>
        </BackButton>
        <NextButton onClick={clickNext} page={page}>
          <ButtonText>
            <span>Next</span>
            <NextIcon />
          </ButtonText>
        </NextButton>
      </Buttons>
    </Basket>
  );
};

export default CreditCardCheckoutBasket;
