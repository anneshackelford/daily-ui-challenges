import Image from 'next/image';
import styled from 'styled-components';
// import Image from '../components/Image';

const height = '100vh';

const Container = styled.header`
  position: relative;
  height: ${height};
`;

const BackgroundWrap = styled.div`
  position: relative;
  height: ${height};
`;

const BackgroundText = styled.div`
  font-family: Switzer;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  > h1 {
    font-weight: 500;
    font-size: 72px;
    line-height: 85%;
  }
  > h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 85%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: ${height};
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  ); ;
`;

const NavBar = styled.nav`
  color: white;
  display: flex;
  flex-direction: row;
  margin: 60px 150px 0;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
`;

const Label = styled.label`
  font-family: Switzer;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 71px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 93px 253px 0 150px;
  gap: 100px;
  @media screen and (max-width: 1380px) {
    flex-direction: column;
    justify-content: center;
    margin: 93px 150px;
  }
`;

const SignUpBox = styled.div`
  min-width: 554px;
  height: 725px;
  text-align: center;
  background: linear-gradient(
    154.4deg,
    rgba(255, 255, 255, 0.2) 12.58%,
    rgba(255, 255, 255, 0.05) 80.81%
  );
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  mix-blend-mode: overlay;
  border-radius: 10px;

  > h1 {
    font-family: Switzer;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;
    margin: 0;
    padding: 0;
    margin-top: 69px;
  }
  > h4 {
    font-family: Switzer;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    margin: 0;
    padding: 0;
    margin-top: 5px;
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
          // loader={'custom'}
          // unoptimized
        />
      </BackgroundWrap>
      <Overlay>
        <NavBar>
          <Label>DailyUI_1</Label>
          <Group>
            <Label>Product</Label>
            <Label>Contact</Label>
            <Label>About</Label>
          </Group>
        </NavBar>
        <Main>
          <BackgroundText>
            <h4>Cabin renting for nature lovers</h4>
            <h1>Join us and start discovering the world.</h1>
          </BackgroundText>
          <SignUpBox>
            <h1>Create an account.</h1>
            <h4>
              Already have one? <u>Sign in</u>
            </h4>
          </SignUpBox>
        </Main>
      </Overlay>
    </Container>
  );
};

export default SignUp;
