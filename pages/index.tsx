import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { DailyUI } from '../components/DailyUI';

const LabelMixin = css`
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-family: 'Switzer', sans-serif;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 175px 100px 50px;

  > h1 {
    ${LabelMixin}
    margin-top: 20px;

    font-family: 'Clash Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 118px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 49px;
    margin-left: 30px;
    width: 300px;
    > h1 {
      margin-top: 103px;
      font-size: 48px;
      line-height: 100%;
    }
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

const LabelStrong = styled.h3`
  ${LabelMixin}
  font-family: 'Switzer', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const Label = styled.h3`
  ${LabelMixin}
  font-family: 'Switzer', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const LargeLabel = styled.h2`
  ${LabelMixin}
  margin-right: 6px;
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  @media screen and (max-width: 1023px) {
    font-size: 24px;
  }
`;

const LargeLabelStrong = styled.h2`
  ${LabelMixin}

  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;

  @media screen and (max-width: 1023px) {
    font-size: 24px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
  }
`;

const Group = styled.div``;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 31px;
  @media screen and (max-width: 768px) {
    column-gap: 43px;
    align-self: flex-start;
  }
`;

const Divider = styled.hr`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 300px;
    margin-top: 103px;
    margin-bottom: 33px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    align-self: start;
  }
`;

const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* margin-top: 58px; */
    position: absolute;
    top: 100vh;
    padding-top: 3px;
  }
`;

const Arrow = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 38px;
    /* margin-top: 192px; */
    position: absolute;
    top: 80vh;
  }
`;

const Layout = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anne Shackelford</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Header>
          <TopRow>
            <LabelStrong>Start Date</LabelStrong>
            <Label>26.02.22</Label>
          </TopRow>
          <h1>DailyUI CHALLENGE</h1>
          <BottomRow>
            <Left>
              <Group>
                <LabelStrong>Designer</LabelStrong>
                <Label>Emilie Durand</Label>
              </Group>
              <Group>
                <LabelStrong>Developer</LabelStrong>
                <Label>Anne Shackelford</Label>
              </Group>
            </Left>
            <Divider />
            <Right>
              <LargeLabel>count</LargeLabel>
              <LargeLabelStrong>002</LargeLabelStrong>
            </Right>
          </BottomRow>
        </Header>
        <Arrow src='images/arrow-down.svg' alt='down arrow' />
        <MainLayout>
          <Link href='/daily-ui/creditcardcheckout' passHref>
            <a>
              <DailyUI
                backgroundColor={'#E9F1F6'}
                color={'#2C79A5'}
                number={'002'}
                name='Credit Card Checkout'
              />
            </a>
          </Link>
          <Link href='/daily-ui/signup' passHref>
            <a>
              <DailyUI
                backgroundColor={'#d0dcd1'}
                color={'#546f50'}
                number={'001'}
                name='Sign Up'
              />
            </a>
          </Link>
        </MainLayout>
      </Layout>
    </div>
  );
};

export default Home;
