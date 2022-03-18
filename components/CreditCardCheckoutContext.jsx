import { createContext, MouseEventHandler, useState } from 'react';

const initialValue = {
  page: 1,
  clickBack: () => { },
  clickNext: () => { },
};
const CreditCardCheckoutContext = createContext(initialValue);
CreditCardCheckoutContext.displayName = 'CreditCardCheckoutContext';

export default CreditCardCheckoutContext;
