import styled, { css } from 'styled-components';

const Basket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (min-width: 1700px) {
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

const Summary = styled.div`
  padding: 34px 0 36px;
  background: rgba(248, 248, 248, 0.6);
  border-radius: 20px;

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
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  padding-bottom: 44px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
  margin: 15px 22px 0 38px;
  @media screen and (min-width: 1300px) {
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
`;
const ItemVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin: 0;
  > div {
    margin: 0 0 0 16px;
  }
`;

const Label = styled.div`
  margin-top: 4px;
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
  margin: 0 50px;
  padding-bottom: 44px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Total = styled.div`
 margin: 0 54px;
`;

const Title = styled.div`
  margin: 0 54px;
`;

const CreditCardCheckoutBasket = () => {
  return (
    <Basket>
      <Summary>
          <Title>

          
        <ItemHorizontal>
          <h2>Order</h2>
          <img src='/images/exportIcon.png' height={18} width={18} />
        </ItemHorizontal></Title>
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
      <Button>
        <ButtonText>Next</ButtonText>
      </Button>
    </Basket>
  );
};

export default CreditCardCheckoutBasket;
