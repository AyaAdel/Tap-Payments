import { useEffect, useState } from 'react';
import { Errors } from 'types/creditCard';
import validateCreditCardInfo from 'utils/validateCreditCardInfo';

export default function useCreditCard() {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardType: '',
    cardExpiration: '',
    cardSecurityCode: '',
    cardPostalCode: '',
    focus: undefined,
  });

  const [errors, setErrors] = useState({} as Errors);

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === 'cardSecurityCode' ? 'cvc' : e.target.name,
    });
  };

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      values.cardName &&
      values.cardNumber &&
      values.cardExpiration &&
      values.cardSecurityCode
    ) {
      setErrors(validateCreditCardInfo(values));
    }
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateCreditCardInfo(values));
  };

  return { handleChange, handleFocus, handleSubmit, values, errors };
}
