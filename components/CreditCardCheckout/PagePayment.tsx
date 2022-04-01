import { useContext } from 'react';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import {
  Buttons,
  CreditCardButton,
  Form,
  Group,
  Information,
  Input,
  InputWide,
  Label,
  PaymentInformation,
  PaymentMethod,
  PayPalButton,
  SelectedInputWide,
  ShippingInformation,
} from './styles';

const PagePayment = () => {
  const { page } = useContext(CreditCardCheckoutContext);
  const display = page === 2;

  return (
    <Information display={display} page={page}>
      <PaymentMethod>
        <h2>Payment&nbsp;method</h2>
        <Buttons>
          <CreditCardButton>
            <span>
              <img src={'/images/logos_mastercard.png'} />
            </span>
            <span>
              <img src={'/images/logos_visaelectron.png'} />
            </span>
            <span>Credit or Debit Card</span>
          </CreditCardButton>
          <PayPalButton>
            <span>
              <img src={'/images/bxl_paypal.png'} />
            </span>
            <span>PayPal</span>
          </PayPalButton>
        </Buttons>
      </PaymentMethod>
      <PaymentInformation>
        <h2>Payment&nbsp;information</h2>
        <Form>
          <Group>
            <Label>Cardholder name</Label>
            <SelectedInputWide />
          </Group>
          <Group>
            <Label>Card number</Label>
            <InputWide />
          </Group>
          <Group>
            <Label>Expiration date</Label>
            <Input />
          </Group>
          <Group>
            <Label>CVC</Label>
            <Input />
          </Group>
        </Form>
      </PaymentInformation>
    </Information>
  );
};

export default PagePayment;
