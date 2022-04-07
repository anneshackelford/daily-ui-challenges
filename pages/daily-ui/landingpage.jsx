import styled, { css } from 'styled-components';
import Image from 'next/image';

const Layout = styled.div`
  background-color: #ededed;
  height: 100vh;
`;
const BackgroundWrap = styled.div`
  position: relative;
  height: 992px;
`;

const TransitionWrapAbsolute = styled.div`
  position: absolute;
  top: 754px;
`;

const TransitionWrapRelative = styled.div`
  position: relative;
  height: 252px;
  width: 100vw;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 auto; */
  max-width: 340px;
  width: 100vw;

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
  /* border: 1px solid black; */
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 59px 0;
  p {
    margin: 0px;
  }
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    max-width: 1520px;
  }
`;

const Left = styled.div`
  /* border: 1px solid white; */
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
  /* border: 1px solid white; */
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
  /* border: 1px solid white; */

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const StyledButtonMixin = css`
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
  border: none;
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

const NavbarButton = styled.button`
  ${StyledButtonMixin}
`;

const HeaderButton = styled.button`
  ${StyledButtonMixin}
  background: rgba(255, 255, 255, 0.3);
  margin-top: 45px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid black; */
  width: 100%;
  margin-top: 24px;
  align-items: center;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    /* gap: 302px; */
  }
  @media screen and (min-width: 1700px) {
    max-width: 1520px;
  }
`;

const TextSection = styled.section`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  > h1 {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 350;
    font-size: 42px;
    line-height: 96px;
    color: #0c0c0c;
    margin: 0;
    > strong {
      font-weight: 600;
    }
  }
  > h2 {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 350;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    margin: 0;
    margin-top: 33px;
    width: 380px;
  }
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    /* margin-top: 140px; */
    > h1 {
      font-size: 72px;
      line-height: 96px;
    }
    > h2 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const ImageSection = styled.section`
  /* border: 1px solid black; */
  height: 554px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const ScissorsBackgroundWrap = styled.div`
  position: relative;
`;

const ScissorsWrapAbsolute = styled.div`
  position: absolute;
  /* width: fit-content; */
  /* width: 120%; */
  /* width: 600px; */
  /* top: 0; */
  /* height: 100%; */
`;

const ScissorsWrapRelative = styled.div`
  position: relative;
  margin-top: 25%;
  /* width: 600px; */
  /* width: fit-content; */
  /* height: 450px; */
  /* width: 100%; */
`;

const Main = styled.main`
  border: 1px solid black;
  height: 300px;
  width: 100%;
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
    <Layout>
      <BackgroundWrap>
        <Image
          src='/images/landingPage/background.png'
          alt='pastel background image'
          layout='fill'
          // objectFit='cover'
          // objectPosition={'26%'}
          height='992'
          width='1920'
          priority
        />
      </BackgroundWrap>
      <TransitionWrapAbsolute>
        <TransitionWrapRelative>
          <Image
            src='/images/landingPage/background2.png'
            alt='transition background image'
            layout='fill'
            // objectFit='cover'
            // objectPosition={'bottom'}
            height='252'
            width='1920'
            priority
          />
        </TransitionWrapRelative>
      </TransitionWrapAbsolute>
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
            <NavbarButton>
              <p>book appointment</p>
            </NavbarButton>
          </Right>
        </NavBar>
        <Header>
          <TextSection>
            <h1>
              Your style, <strong>your hair</strong>
            </h1>
            <h2>A change to be relaxed and come out looking fresh</h2>
            <HeaderButton>book appointment</HeaderButton>
          </TextSection>
          <ImageSection>
            <ScissorsBackgroundWrap>
              <Image
                src='/images/landingPage/scissorsBackground.png'
                alt='blob background'
                // layout='fill'
                // objectFit='cover'
                // objectPosition={'50% 50%'}
                height='556'
                width='581'
                priority
              />
            </ScissorsBackgroundWrap>
            <ScissorsWrapAbsolute>
              <ScissorsWrapRelative>
                <Image
                  src='/images/landingPage/scissors.png'
                  alt='scissors'
                  // layout='fill'
                  // objectFit='cover'
                  // objectPosition={'bottom'}
                  height='560'
                  width='560'
                  priority
                />
              </ScissorsWrapRelative>
            </ScissorsWrapAbsolute>
          </ImageSection>
        </Header>
        <Main></Main>
      </Overlay>
    </Layout>
  );
};

export default LandingPage;
