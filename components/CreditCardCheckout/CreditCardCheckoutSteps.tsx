import { useContext } from 'react';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import PagePayment from './PagePayment';
import PageShipping from './PageShipping';
import PageOrdering from './PageOrdering';

const CreditCardCheckoutSteps = () => {
  const { page } = useContext(CreditCardCheckoutContext);

  return (
    <>
      <PageShipping />
      <PagePayment />
      <PageOrdering />
    </>
  );
};

export default CreditCardCheckoutSteps;
