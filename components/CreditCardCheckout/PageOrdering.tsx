import { useContext } from 'react';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import {
  Content,
  FieldValue,
  FieldValueAddress,
  Form,
  Group,
  Information,
  Label,
  PaymentInformationOrdering,
  PaymentInformationOrderingAddress,
  PersonalDetails,
  SelectedInputWide,
  SelectedInputWideDeep,
  SelectedInputWideDeepAddress,
} from './styles';

const PageOrdering = () => {
  const { page } = useContext(CreditCardCheckoutContext);
  const display = page === 3;

  return (
    <Information display={display} page={page}>
      <PaymentInformationOrdering>
        <h2>Payment&nbsp;information</h2>
        <Content>
          <SelectedInputWideDeep>
            <FieldValue>1234 5678 9012 3456</FieldValue>
            <span>
              <img src={'/images/logos_mastercard.png'} />
            </span>
          </SelectedInputWideDeep>
          <span>
            <img src={'/images/edit.png'} />
          </span>
        </Content>
      </PaymentInformationOrdering>
      <PaymentInformationOrderingAddress>
        <h2>Address</h2>
        <Content>
          <SelectedInputWideDeepAddress>
            <FieldValueAddress>
              <p>John Doe</p>
              <p>123 Street</p>
              <p>Paris</p>
              <p>France</p>
            </FieldValueAddress>
          </SelectedInputWideDeepAddress>
          <span>
            <img src={'/images/edit.png'} />
          </span>
        </Content>
      </PaymentInformationOrderingAddress>
    </Information>
  );
};

export default PageOrdering;
