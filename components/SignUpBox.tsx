import styled, { css } from 'styled-components';

const InputMixin = css`
  height: 50px;
  min-width: 100%;
  margin: 0;
  padding-left: 21px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);

  font-family: 'Switzer';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  border: none;

  ::placeholder {
    color: black;
    /* color: rgba(0, 0, 0, 0.6); */
  }
`;

const Input = styled.input`
  ${InputMixin}
  margin-bottom: 13px;
`;
const EmailInput = styled.input`
  ${InputMixin}
  margin: 20px 0 33px;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  @media screen and (min-width: 767px) {
    /* flex-direction: row; */
  }
`;

const TermsLabel = styled.label`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 14px;
  @media screen and (min-width: 767px) {
  }
`;

const SubmitButton = styled.button`
  width: 169px;
  height: 50px;
  background: #749978;
  border-radius: 50px;
  border: none;
  color: white;
  margin-top: 38px;
  margin-bottom: 64px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }
`;

const TermsGroup = styled.div`
  display: flex;
  margin-top: 38px;
  text-align: left;
  align-items: baseline;
`;

const Checkbox = styled.input`
  margin: 0;
  accent-color: #749978;
`;

const SignUpBoxContainer = styled.div`
  margin: 0 23px;
  text-align: center;

  > h1 {
    font-family: 'Switzer', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    margin-top: 51px;
  }
  > h2 {
    font-family: 'Switzer';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    margin: 0;
    margin-top: 9px;
  }
  @media screen and (min-width: 767px) {
    margin: 69px 73px 67px;
    > h1 {
      font-size: 36px;
      line-height: 48px;
      margin:0;
    }
    > h2 {
    }
  }
`;

const Layout = styled.div`
  width: 100%;


  /* -webkit-backdrop-filter: blur(20px);
backdrop-filter: blur(20px);
background: linear-gradient(
  154.4deg,
  rgba(255, 255, 255, 0.2) 12.58%,
  rgba(255, 255, 255, 0.05) 80.81%
); */

  /* -webkit-backdrop-filter: blur(20px); */
  /* backdrop-filter: blur(20px); */
  /* background: blur(20%); */
  /* background: linear-gradient(
  154.4deg,
  rgba(0, 0, 0, 0.3) 80.81%,
  rgba(0, 0, 0, 0.3) 12.58%
); */
background-color: rgba(0, 0, 0, 0.2);

  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  @media screen and (min-width: 767px) {
    width: 552px;
    min-width: 552px;
    margin-right: 100px;
    /* max-width: 50%;
    max-height: 50%; */
    /* padding: 20px 40px; */

  }
`;

const SignUpBox = () => {
  return (
    <Layout>
      <SignUpBoxContainer>
        <h1>Create an account</h1>
        <h2>Already have one? Sign in</h2>
        <NameInput>
          <Input
            type='text'
            id='fname'
            name='fname'
            placeholder='First name*'
          />
          <Input type='text' id='lname' name='lname' placeholder='Last name*' />
        </NameInput>
        <EmailInput type='text' id='lname' name='lname' placeholder='Email*' />
        <Input type='text' id='fname' name='fname' placeholder='Password*' />
        <Input
          type='text'
          id='lname'
          name='lname'
          placeholder='Confirm password*'
        />
        <TermsGroup>
          <Checkbox type='checkbox' id='terms' name='terms' value='consent' />
          <TermsLabel htmlFor='terms'>
            I agree to the Terms of Services and Privacy Policy
          </TermsLabel>
        </TermsGroup>
        <SubmitButton>Create Account</SubmitButton>
      </SignUpBoxContainer>
    </Layout>
  );
};

export default SignUpBox;
