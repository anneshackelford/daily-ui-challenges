import styled, { css } from 'styled-components';
import Image from 'next/image';


const BackgroundWrap = styled.div`
  position: relative;
  /* height: 992px; */
`;
const Background2Wrap = styled.div`
  position: relative;
  /* height: 252px; */
  margin-top: -236px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 340px;

  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #000000;

  @media screen and (min-width: 540px) {
    max-width: 500px;
  }
  @media screen and (min-width: 730px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 1100px;
  }
  @media screen and (min-width: 1700px) {
    max-width: 1520px;
  }

`;

const NavBar = styled.nav`
  border: 1px solid white;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 59px 0;
  p {
    margin: 0px;
  }
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Left = styled.div`
  border: 1px solid white;
  font-family: 'Segoe UI Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  @media screen and (min-width: 540px) {
    font-size: 18px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Middle = styled.div`
  border: 1px solid white;
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 45px;
  font-family: 'Segoe UI Variable';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  @media screen and (min-width: 540px) {
    display: flex;
    font-size: 18px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Right = styled.div`
  border: 1px solid white;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: 0 20px;
  height: 50px;
  background: #2ebdea;
  backdrop-filter: blur(10px);
  font-family: 'Segoe UI Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 21px;
  color: #ffffff;
  border-radius: 50px;
  > p {
    margin: 0;
  }

  @media screen and (min-width: 540px) {
    font-size: 16px;
    width: 203px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Header = styled.div`
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Main = styled.main`
  border: 1px solid white;
  height: 300px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Footer = styled.footer`
  border: 1px solid white;
  height: 100px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const template = styled.div`
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;



const LandingPage = () => {
  return (
    <>
      <BackgroundWrap>
        <Image
          src='/images/landingPage/background.png'
          alt='forest background image'
          // layout='fill'
          // objectFit='cover'
          // objectPosition={'26%'}
          height='992'
          width='1920'
          priority
        />
                
      </BackgroundWrap>
      <Background2Wrap>
        <Image
          src='/images/landingPage/background2.png'
          alt='forest background image'
          // layout='fill'
          // objectFit='cover'
          // objectPosition={'754px'}
          height='252'
          width='1920'
          priority
        />
      </Background2Wrap>
      <Overlay>
        <NavBar>
          <Left>
            <p>DailyUI_003</p>
          </Left>
          <Middle>
            <p>Our barbers</p>
            <p>Our products</p>
            <p>Contact</p>
            <p>About</p>
          </Middle>
          <Right>
            <StyledButton>
              <p>book appointment</p>
            </StyledButton>
          </Right>
        </NavBar>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Overlay>
    </>
  );
};

export default LandingPage;
