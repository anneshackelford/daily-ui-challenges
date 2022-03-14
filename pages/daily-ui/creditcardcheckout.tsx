import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(244.14deg, #9eb3bf 43.96%, #f2f2f2 89.95%);
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  height: 105px;
  width: 85%;

  > span {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #2c79a5;
  }
`;

const NavRightSide = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 53px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #2c79a5;
  height: 130px;
  width: 100%;
  margin-top: 181px;
  @media screen and (min-width: 767px) {
    padding: 0 150px;
  }
`;

const FooterRightSide = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 53px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
  }
`;

const Copyright = styled.label`
  font-family: 'Switzer';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 85%;
  color: #ffffff;
`;

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

const Information = styled.div`
  width: 100%;
  background: rgba(248, 248, 248, 0.6);
  border-radius: 20px;

  > h2 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1010px;
    /* height: 778px; */
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

const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 21px;
  justify-content: left;

  @media screen and (min-width: 1300px) {
  }
`;
const Label = styled.label`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

const InputMixin = css`
  height: 55px;
  width: 240px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 20px;
  background-color: transparent;
  margin-top: 8px;
  @media screen and (min-width: 540px) {
    width: 323px;
  }
`;
const Input = styled.input`
  ${InputMixin}
`;

const SelectedInput = styled.input`
  ${InputMixin}
  background: rgba(44, 121, 165, 0.05);
  border: 1.5px solid #2c79a5;
`;

const ZipCodeInput = styled.input`
  ${InputMixin};
  width: 184px;
`;
const CountryInput = styled.input`
  ${InputMixin}
  width: 203px;
`;
const CityInput = styled.input`
  ${InputMixin}
  width: 235px;
`;

const ShippingButtonMixin = css`
  width: 240px;
  height: 78px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #2c79a5;

  @media screen and (min-width: 540px) {
    width: 320.3px;
    padding: 0 33px;
  }
`;

const ShippingButton = styled.div`
  ${ShippingButtonMixin};
  border: 1.5px solid #2c79a5;
  background: rgba(44, 121, 165, 0.05);
`;

const ExpressShippingButton = styled.div`
  ${ShippingButtonMixin};
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
`;

const ShippingButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 21.35px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  text-align: left;
`;

const Mixin = css`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  > h2 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.8);
    text-align: left;
    margin: 0;
  }
  @media screen and (min-width: 1300px) {
    flex-direction: row;
  }
`;

const PersonalDetails = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  padding-bottom: 56px;

  gap: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 540px) {
    margin: 52px 58px 0;
  }
  @media screen and (min-width: 1300px) {
    gap: 96px;
    width: 892px;
  }
`;

const ShippingInformation = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  padding-bottom: 56px;

  gap: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  @media screen and (min-width: 540px) {
    margin: 52px 58px 0;
  }
  @media screen and (min-width: 1300px) {
    gap: 53px;
    width: 892px;
  }
`;

const ShippingMethod = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  gap: 25px;
  justify-content: center;
  padding-bottom: 56px;
  @media screen and (min-width: 540px) {
    margin: 52px 58px 0;
  }
  @media screen and (min-width: 1300px) {
    gap: 87.04px;
    margin: 52px 58px 0;
    width: 892px;
  }
`;

const CreditCardCheckout = () => {
  return (
    <Container>
      <NavBar>
        <span>DailyUI_002</span>
        <NavRightSide>
          <span>Product</span>
          <span>Contact</span>
          <span>About</span>
        </NavRightSide>
      </NavBar>
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
          <Information>
            <PersonalDetails>
              <h2>Personal&nbsp;details</h2>
              <Form>
                <Group>
                  <Label>First name*</Label>
                  <SelectedInput />
                </Group>
                <Group>
                  <Label>Last name*</Label>
                  <Input />
                </Group>
                <Group>
                  <Label>Email address*</Label>
                  <Input />
                </Group>
                <Group>
                  <Label>Phone number</Label>
                  <Input />
                </Group>
              </Form>
            </PersonalDetails>
            <ShippingInformation>
              <h2>Shipping&nbsp;information</h2>
              <Form>
                <Group>
                  <Label>Street address</Label>
                  <Input />
                </Group>
                <Group>
                  <Label>Additional information</Label>
                  <Input />
                </Group>
                <Group>
                  <Label>Zip code</Label>
                  <ZipCodeInput />
                </Group>
                <Group>
                  <Label>City</Label>
                  <CityInput />
                </Group>
                <Group>
                  <Label>Country</Label>
                  <CountryInput />
                </Group>
              </Form>
            </ShippingInformation>
            <ShippingMethod>
              <h2>Shipping&nbsp;method</h2>
              <ShippingButtons>
                <ShippingButton>
                  <span>Standard shipping</span>
                  <span>
                    <b>4,95€</b>
                  </span>
                </ShippingButton>
                <ExpressShippingButton>
                  <span>Express shipping</span>
                  <span>
                    <b>9,95€</b>
                  </span>
                </ExpressShippingButton>
              </ShippingButtons>
            </ShippingMethod>
          </Information>
          <Basket>
            <Summary></Summary>
            <Button>
              <ButtonText>Next</ButtonText>
            </Button>
          </Basket>
        </OrderContainer>
      </Main>
      <Footer>
        <Copyright>© 2022 DailyUI_002. All rights reserved.</Copyright>
        <FooterRightSide>
          <span>About</span>
          <span>Contact us</span>
        </FooterRightSide>
      </Footer>
    </Container>
  );
};

export default CreditCardCheckout;
