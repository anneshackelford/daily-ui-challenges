import { MouseEventHandler, useState } from 'react';
import styled, { css } from 'styled-components';
import CreditCardCheckoutContainer from '../../components/CreditCardCheckout/CreditCardCheckoutContainer';
import CreditCardCheckoutContext from '../../components/CreditCardCheckoutContext';

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
  > span {
    display: none;
  }
  > img {
    display: block;
  }

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
    > span {
      display: block;
    }
    > img {
      display: none;
    }
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
  margin-top: 81px;
  @media screen and (min-width: 767px) {
    padding: 0 150px;
  }
  @media screen and (min-width: 1700px) {
    margin-top: 181px;
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

const CreditCardCheckout = () => {
  const [page, setPage] = useState(1);

  const clickNext = () => {
    console.log('clickNext page before', page);
    if (page !== 3)
      console.log('setting page to page:  ', page + 1);
    setPage(page + 1);
  };

  const clickBack = () => {
    console.log('clickNext page before', page);
    if (page !== 1)
      console.log('setting page to page:  ', page - 1);
    setPage(page - 1);
  };

  const pageContext = {
    page: page,
    clickBack: clickBack,
    clickNext: clickNext
  }

  return (
    <CreditCardCheckoutContext.Provider value={pageContext}>
      <Container>
        <NavBar>
          <span>DailyUI_002</span>
          <NavRightSide>
            <span>Product</span>
            <span>Contact</span>
            <span>About</span>
            <img src='/images/hamburger.svg' />
          </NavRightSide>
        </NavBar>
        <CreditCardCheckoutContainer />
        <Footer>
          <Copyright>© 2022 DailyUI_002. All rights reserved.</Copyright>
          <FooterRightSide>
            <span>About</span>
            <span>Contact us</span>
          </FooterRightSide>
        </Footer>
      </Container>
    </CreditCardCheckoutContext.Provider>
  );
};

export default CreditCardCheckout;
