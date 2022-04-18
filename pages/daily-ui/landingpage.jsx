import styled, { css } from 'styled-components';
import Image from 'next/image';

const Layout = styled.div`
  background-color: #ededed;
  height: 3785px;
  font-family: 'Segoe UI Variable', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  background-color: #ededed;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;
const BackgroundWrap = styled.div`
  position: relative;
  height: 992px;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const TransitionWrapAbsolute = styled.div`
  position: absolute;
  top: 754px;
  max-width: 100%;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const TransitionWrapRelative = styled.div`
  position: relative;
  height: 252px;
  width: 100vw;
  max-width: 100%;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  width: 100vw;

  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #000000;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
    max-width: 1520px;
  }
`;

const NavBar = styled.nav`
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
  display: none;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 45px;
    font-size: 18px;
  }
`;

const Right = styled.div`
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
  font-weight: 500;
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
  color: white;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const HaircutDescriptionButton = styled.button`
  ${StyledButtonMixin}
  margin-top: 40px;
  color: white;
  background: #ec9fff;
  @media screen and (min-width: 540px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 730px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  margin-top: 0;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 540px) {
    gap: 100px;
  }
  @media screen and (min-width: 730px) {
    flex-direction: row;
    margin-top: 24px;
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
    max-width: 1520px;
    flex-direction: row;
  }
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 350;
    font-size: 42px;
    line-height: 120%;
    color: #0c0c0c;
    margin: 0;
    > strong {
      font-weight: 600;
      white-space: nowrap;
    }
  }
  > h2 {
    font-weight: 350;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    margin: 0;
    margin-top: 33px;
    max-width: 380px;
  }
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1000px) {
    max-width: 60%;
    > h1 {
      font-size: 72px;
      line-height: 96px;
    }
    > h2 {
      font-size: 24px;
      line-height: 32px;
    }
  }
  @media screen and (min-width: 1300px) {
  }
`;

const ImageSection = styled.section`
  display: flex;
  align-items: center;

  @media screen and (min-width: 540px) {
    max-width: 75%;
  }
  @media screen and (min-width: 730px) {
    max-width: 50%;
  }
  @media screen and (min-width: 1300px) {
  }
`;

const ScissorsBackgroundWrap = styled.div`
  position: relative;
`;

const ScissorsWrapAbsolute = styled.div`
  position: absolute;
`;

const ScissorsWrapRelative = styled.div`
  position: relative;
  @media screen and (min-width: 540px) {
    margin-top: 25%;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const Main = styled.main`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 58px;
  @media screen and (min-width: 540px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 730px) {
    margin-top: 105px;
  }
  @media screen and (min-width: 1300px) {
  }
`;

const HaircutsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  @media screen and (min-width: 540px) {
    gap: 60px;
  }
  @media screen and (min-width: 730px) {
    gap: 100px;
  }
  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1700px) {
    gap: 180px;
  }
`;

const HaricutsIllustrationContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 850px) {
    width: 50%;
  }
  @media screen and (min-width: 1300px) {
    width: 50%;
  }
`;

const HaricutsIllustration = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  border-radius: 30px;
  padding: 40px 40px;
  @media screen and (min-width: 540px) {
    padding: 80px 83px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    padding: 141px 83px;
  }
`;

const HaricutsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #000000;
    margin: 0;
  }
  > p {
    font-weight: 300;
    font-size: 20px;
    line-height: 120%;
    color: #000000;
  }
  > p:first-of-type {
    margin-top: 40px;
  }
  > p:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: 540px) {
    > h1 {
      font-size: 36px;
    }
    > p:first-of-type {
      margin-top: 40px;
    }
  }
  @media screen and (min-width: 730px) {
    > h1 {
      font-size: 36px;
    }
    > p:first-of-type {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 850px) {
    > h1 {
      font-size: 36px;
    }
    > p:first-of-type {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 1300px) {
    > h1 {
      font-size: 48px;
    }
    > p {
      font-size: 24px;
    }
    > p:first-of-type {
      margin-top: 84px;
    }
  }
  @media screen and (min-width: 1700px) {
  }
`;

const HaircutElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 52px;
  padding: 0 40px;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    padding: 0 83px;
  }
`;

const HaircutImage = styled.div`
  min-width: 67%;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const HaircutDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.textRight ? 'flex-start' : 'flex-end')};
  > h1 {
    font-weight: 350;
    font-size: 24px;
    line-height: 48px;
    color: #000000;
    margin: 0;
    white-space: nowrap;
  }
  > span {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    > h1 {
      font-size: 36px;
    }
  }
  @media screen and (min-width: 1700px) {
    > h1 {
      font-size: 48px;
    }
  }
`;

const ShopsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 180px;
  width: 100%;
  height: 705px;
  background: rgba(165, 219, 236, 0.5);
  border-radius: 20px;

  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

const BookSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 180px;
  width: 100%;
  height: 572px;
  background: rgba(241, 184, 255, 0.2);
  border-radius: 20px;

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
            <a href={'/'}>DailyUI_003</a>
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
        <Main>
          <HaircutsSection>
            <HaricutsIllustrationContainer>
              <HaricutsIllustration>
                <HaircutElement>
                  <HaircutImage>
                    <Image
                      src='/images/landingPage/standardHaircut.png'
                      alt='standard haircut'
                      // layout='fill'
                      // objectFit='cover'
                      // objectPosition={'bottom'}
                      height='285'
                      width='285'
                      priority
                    />
                  </HaircutImage>
                  <HaircutDescription textRight={true}>
                    <h1>Standard</h1>
                    <span>25€</span>
                  </HaircutDescription>
                </HaircutElement>
                <HaircutElement>
                  <HaircutDescription textRight={false}>
                    <h1>High fade</h1>
                    <span>45€</span>
                  </HaircutDescription>
                  <HaircutImage>
                    <Image
                      src='/images/landingPage/highFadeHaircut.png'
                      alt='hide fade haircut'
                      // layout='fill'
                      // objectFit='cover'
                      // objectPosition={'bottom'}
                      height='285'
                      width='285'
                      priority
                    />
                  </HaircutImage>
                </HaircutElement>
                <HaircutElement>
                <HaircutImage>
                    <Image
                      src='/images/landingPage/pompadourHaircut.png'
                      alt='pompadour haircut'
                      // layout='fill'
                      // objectFit='cover'
                      // objectPosition={'bottom'}
                      height='285'
                      width='285'
                      priority
                    />
                  </HaircutImage>
                  <HaircutDescription textRight={true}>
                    <h1>Pompadour</h1>
                    <span>35€</span>
                  </HaircutDescription>
                </HaircutElement>
                <HaircutElement>
                  <HaircutDescription textRight={false}>
                    <h1>Low fade</h1>
                    <span>45€</span>
                  </HaircutDescription>
                  <HaircutImage>
                    <Image
                      src='/images/landingPage/lowFadeHaircut.png'
                      alt='low fade haircut'
                      // layout='fill'
                      // objectFit='cover'
                      // objectPosition={'bottom'}
                      height='285'
                      width='285'
                      priority
                    />
                  </HaircutImage>
                </HaircutElement>
              </HaricutsIllustration>
            </HaricutsIllustrationContainer>
            <HaricutsDescription>
              <h1>We are here to do the haircut of your dreams</h1>
              <p>
                Eget quis purus vitae lobortis morbi placerat suscipit elit.
                Molestie faucibus sit egestas at pulvinar. Id egestas
                suspendisse eget viverra interdum feugiat. Tincidunt eu ornare
                sapien diam, phasellus.
              </p>
              <p>
                Augue nec libero, id id. Amet, dui eleifend id id elit odio est
                vel. Tellus sapien etiam urna porta turpis tellus. Congue
                sodales integer sodales mattis feugiat curabitur vitae.
              </p>
              <HaircutDescriptionButton>
                book appointment
              </HaircutDescriptionButton>
            </HaricutsDescription>
          </HaircutsSection>
          <ShopsSection></ShopsSection>
          <BookSection></BookSection>
        </Main>
      </Overlay>
    </Layout>
  );
};

export default LandingPage;
