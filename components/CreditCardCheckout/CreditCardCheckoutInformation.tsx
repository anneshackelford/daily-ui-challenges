import { useContext } from 'react';
import { CreditCardCheckoutContext } from '../CreditCardCheckoutProvider';
import Page1 from './Page1';
import { Information, Page2, Page3, PersonalDetails } from './styles';

const CreditCardCheckoutInformation = () => {
  const { page } = useContext(CreditCardCheckoutContext);

  return (
    <>
      <Page1 display={page===1} />
      <Page2 display={page===2}>
        <Information display={page===2} >
          <PersonalDetails>
            <h2>Payment Page</h2>
          </PersonalDetails>
        </Information>
      </Page2>
      <Page3 display={page===3}>
        <Information display={page===3}>
          <PersonalDetails>
            <h2>Ordering Page</h2>
          </PersonalDetails>
        </Information>
      </Page3>
    </>
  );
};

export default CreditCardCheckoutInformation;
