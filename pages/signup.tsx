import Image from 'next/image';
import styled, { css } from 'styled-components';
import SignUpBox from '../components/SignUpBox';

const Container = styled.header``;

const BackgroundWrap = styled.div`
  position: relative;
  height: 1171px;

  @media screen and (min-width: 767px) {
    height: 1568px;
  }

  @media screen and (min-width: 1588px) {
    height: 100vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 767px) {
  }
`;

const OverlayBackground = styled.div`
  position: relative;
  height: 357px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media screen and (min-width: 767px) {
  }
`;

const OverlayContents = styled.div`
  position: absolute;
  top: 0;

  @media screen and (min-width: 767px) {
    top: 0%;
    left: 50%;
    transform: translate(-50%, -0%);
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1441px) {
  }
`;

const BackgroundText = styled.div`
  margin: 0 30px;

  font-family: 'Switzer', sans-serif;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 85%;
    margin: 0;
    margin-top: 14px;
  }
  > h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 85%;
    margin: 0;
  }
  @media screen and (min-width: 767px) {
    margin: 261px 0 0 30px;
    > h1 {
      font-size: 72px;
      margin-top: 24px;
    }
  }
`;

const NavBar = styled.nav`
  color: white;
  display: flex;
  flex-direction: row;
  margin: 22px 30px 0;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 767px) {
    margin: 33px 30px 0;
  }
`;

const LabelMixin = css`
  font-family: 'Switzer', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

const Label = styled.label`
  ${LabelMixin}

  @media screen and (min-width: 767px) {
  }
`;

const MenuItem = styled.label`
  ${LabelMixin}
  display: none;
  @media screen and (min-width: 767px) {
    display: block;
  }
`;

const Hamburger = styled.img`
  ${LabelMixin}
  display: block;
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 71px;
`;

const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  margin: 99px 7px 0 7px;
  gap: 182px;
  flex-direction: column;

  @media screen and (min-width: 1588px) {
    margin: 93px auto 0;
    flex-direction: row;
    justify-content: space-between;
    gap: 198px;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <BackgroundWrap>
        <Image
          src='/images/unsplash_ESkw2ayO2As.png'
          alt='forest background image'
          layout='fill'
          objectFit='cover'
          objectPosition={'26%'}
          height='1080'
          width='1920'
          priority
        />
      </BackgroundWrap>
      <Overlay>
        <OverlayBackground></OverlayBackground>
        <OverlayContents>
          <NavBar>
            <Label>DailyUI_1</Label>
            <Group>
              <MenuItem>Product</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>About</MenuItem>
              <Hamburger src='/images/hamburger.svg' />
            </Group>
          </NavBar>
          <MainContainer>
            <BackgroundText>
              <h4>Cabin renting for nature lovers</h4>
              <h1>Join us and start&nbsp;discovering the world.</h1>
            </BackgroundText>
            <SignUpBox />
          </MainContainer>
        </OverlayContents>
      </Overlay>
    </Container>
  );
};

export default SignUp;
