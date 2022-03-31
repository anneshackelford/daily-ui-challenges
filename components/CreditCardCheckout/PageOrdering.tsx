import { useContext } from 'react';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import { Information, PersonalDetails } from './styles';

const PageOrdering = () => {
  const { page } = useContext(CreditCardCheckoutContext);
  const display = page === 3;

  return (
    <Information display={display}>
      <PersonalDetails>
        <h2>Payment</h2>
      </PersonalDetails>
    </Information>
  );
};

export default PageOrdering;
