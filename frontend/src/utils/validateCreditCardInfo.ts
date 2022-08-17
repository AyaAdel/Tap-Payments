import valid from 'card-validator';
import type { Errors } from 'types/creditCard';

export default function validateCreditCardInfo(values) {
  const errors: Errors = {
    show: true,
    variant: 'danger',
    message: {
      cname: '',
      cnumber: '',
      cexp: '',
      ccvv: '',
    },
    cname: false,
    cnumber: false,
    cexp: false,
    ccvv: false,
  };

  const creditCard: any = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message.ccvv = 'Credit card CVC is not complete';
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message.ccvv = 'Credit card CVC is invalid';
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message.cexp = 'Credit card expiration date is not complete';
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message.cexp = 'Credit card expiration date is invalid';
  }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message.cnumber = 'Credit card number is not complete';
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message.cnumber = 'Credit card number is invalid';
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message.cname = 'Cardholder name is not complete';
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message.cname = 'Cardholder name is invalid';
  }

  if (errors.cname && errors.cnumber && errors.cexp && errors.ccvv) {
    errors.variant = 'success';
  }

  return errors;
}
