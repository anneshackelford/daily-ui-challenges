import styled, { css } from 'styled-components';

interface Props {
  display: boolean;
  page?: number;
}

const Information = styled.div<Props>`
  display: ${(props) => (props.display ? 'block' : 'none')};
  width: 100%;
  background: rgba(248, 248, 248, 0.6);
  border-radius: 20px;

  > h2 {
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.8);
  }

  @media screen and (min-width: 1300px) {
    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1010px;
    height: ${(props) => (props.page === 2 ? '586.29px' : 'unset')};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 21px;
  justify-content: left;
  @media screen and (min-width: 1200px) {
    width: 993px;
  }
`;

const Label = styled.label`
  font-family: 'Ubuntu', sans-serif;
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
    width: 322px;
  }
`;

const InputMixinWide = css`
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
  @media screen and (min-width: 730px) {
    width: 623px;
  }
  @media screen and (min-width: 1300px) {
    width: 656px;
  }
`;

const Input = styled.input`
  ${InputMixin}
`;

const InputWide = styled.input`
  ${InputMixinWide}
`;

const SelectedInput = styled.input`
  ${InputMixin}
  background: rgba(44, 121, 165, 0.05);
  border: 1.5px solid #2c79a5;
`;

const SelectedInputWide = styled.input`
  ${InputMixinWide}
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

const ButtonMixin = css`
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

  font-family: 'Ubuntu', sans-serif;
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
  ${ButtonMixin};
  border: 1.5px solid #2c79a5;
  background: rgba(44, 121, 165, 0.05);
`;

const ExpressShippingButton = styled.div`
  ${ButtonMixin};
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
`;

const CreditCardButton = styled.div`
  ${ButtonMixin};
  border: 1.5px solid #2c79a5;
  background: rgba(44, 121, 165, 0.05);
  width: fit-content;
  align-items: center;
  @media screen and (min-width: 540px) {
    width: fit-content;
    padding: 0 33px;
    gap: 15px;
  }
`;

const PayPalButton = styled.div`
  ${ButtonMixin};
  border: 1.5px solid #2c79a5;
  background: rgba(44, 121, 165, 0.05);
  width: fit-content;
  align-items: center;
  @media screen and (min-width: 540px) {
    width: fit-content;
    padding: 0 33px;
    gap: 15px;
  }
`;

const Buttons = styled.div`
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
    font-family: 'Ubuntu', sans-serif;
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

const PaymentInformation = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  padding-bottom: 56px;

  gap: 25px;
  justify-content: center;
  @media screen and (min-width: 540px) {
    margin: 52px 58px 0;
  }
  @media screen and (min-width: 1300px) {
    gap: 53px;
    width: 892px;
  }
`;

const PaymentInformationOrdering = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  padding-bottom: 56px;
  gap: 25px;
  justify-content: center;
  @media screen and (min-width: 540px) {
    margin: 52px 50px 10px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    gap: 53px;
    width: 892px;
    padding-bottom: 0;
    margin-top: 59px;
    margin-bottom: 0;
    justify-content: space-between;
  }
`;

const PaymentInformationOrderingAddress = styled.div`
  ${Mixin};
  margin: -10px 40px 0;
  padding-bottom: 56px;
  gap: 25px;
  justify-content: center;

  @media screen and (min-width: 540px) {
    gap: 0;
    padding: 0;
    margin: -30px 50px 59px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    gap: 0;
    padding: 0;
    margin: 40px 40px 59px;
    width: 892px;
    justify-content: space-between;
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

const PersonalDetails = styled.div`
  ${Mixin};
  padding: 52px 58px 56px;
  gap: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 540px) {
    padding: 52px 58px 56px;
  }
  @media screen and (min-width: 1300px) {
    padding: 52px 0 56px;
    gap: 96px;
    width: 892px;
  }
`;

const PaymentMethod = styled.div`
  ${Mixin};
  margin: 52px 40px 0;
  gap: 25px;
  justify-content: left;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 540px) {
    margin: 52px 58px 0;
  }
  @media screen and (min-width: 1300px) {
    gap: 87.04px;
    margin: 52px 58px 0;
    width: 892px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16.75px;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 730px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1300px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 14.75px;
    margin: 0 0 0 0;
    padding-bottom: 0;
    width: 892px;
  }
`;

const SelectedInputWideDeep = styled.div`
  ${InputMixinWide}
  background: rgba(44, 121, 165, 0.05);
  border: 1.5px solid #2c79a5;
  position: relative;
  height: 78px;
  > span {
    position: absolute;
    top: 26px;
    right: 15px;
  }
  @media screen and (min-width: 540px) {
    > span {
      right: 26px;
    }
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    margin-top: 0;
  }
`;

const SelectedInputWideDeepAddress = styled.div`
  ${InputMixinWide}
  background: rgba(44, 121, 165, 0.05);
  border: 1.5px solid #2c79a5;
  position: relative;
  height: 144px;
  @media screen and (min-width: 540px) {
    margin-top: 25px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
    margin-top: 0;
  }
`;

const FieldValue = styled.div`
  position: absolute;
  top: 30px;
  left: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 540px) {
    left: 32px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {

  }
`;

const FieldValueAddress = styled.div`
  position: absolute;
  top: 25px;
  left: 17px;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
  > p {
    margin: 7px 0 0;
    text-align: left;
    :first-of-type {
      font-weight: 400;
      margin-top: 0;
    }
  }
  @media screen and (min-width: 540px) {
    left: 32px;
  }
  @media screen and (min-width: 730px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

export {
  Label,
  SelectedInput,
  SelectedInputWide,
  Input,
  InputWide,
  ShippingInformation,
  ZipCodeInput,
  CityInput,
  CountryInput,
  ShippingMethod,
  PaymentMethod,
  Buttons,
  ShippingButton,
  ExpressShippingButton,
  Information,
  PersonalDetails,
  Group,
  Form,
  CreditCardButton,
  PayPalButton,
  PaymentInformation,
  PaymentInformationOrdering,
  Content,
  FieldValue,
  SelectedInputWideDeep,
  SelectedInputWideDeepAddress,
  FieldValueAddress,
  PaymentInformationOrderingAddress,
};
