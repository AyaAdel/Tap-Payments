import useCreditCard from 'hooks/useCreditCard';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form, Input } from 'antd';
import { useEffect } from 'react';

import './CreditCard.css';

type CreditCardProps = {
  isCreditCardVaild: (isVaild: boolean) => void;
};

export default function CreditCard({ isCreditCardVaild }: CreditCardProps) {
  const [form] = Form.useForm();
  const { handleChange, handleFocus, handleSubmit, values, errors } =
    useCreditCard();

  const onFormChange = (formName) => {
    handleChange(formName[0].name[0], formName[0].value);
  };

  useEffect(() => {
    isCreditCardVaild(errors.variant !== 'success');
  }, [errors.variant]);

  const handleErrorMessage = (fieldName: string) =>
    (!!errors && errors.message && errors.message[fieldName]) || '';

  const validateMessages = {
    required: `${name} is required!`,
  };

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <div className="credit-form">
              <Form
                form={form}
                name="credit-card"
                onFinish={handleSubmit}
                onFieldsChange={onFormChange}
                layout="vertical"
                initialValues={{
                  cardName: '',
                  cardNumber: '',
                  cardExpiration: '',
                  cardSecurityCode: '',
                }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  required
                  name="cardName"
                  validateStatus={errors.cname == false ? 'error' : 'success'}
                  label="Cardholder Name"
                  help={handleErrorMessage('cname')}
                >
                  <Input
                    type="text"
                    id="cardName"
                    data-testid="cardName"
                    placeholder="Cardholder Name"
                    value={values.cardName}
                    onFocus={handleFocus}
                  />
                </Form.Item>
                <Form.Item
                  required
                  name="cardNumber"
                  validateStatus={errors.cnumber == false ? 'error' : 'success'}
                  label="Card Number"
                  help={handleErrorMessage('cnumber')}
                >
                  <Input
                    type="number"
                    id="cardNumber"
                    data-testid="cardNumber"
                    placeholder="Card Number"
                    value={values.cardNumber}
                    onFocus={handleFocus}
                  />
                </Form.Item>
                <Form.Item
                  required
                  name="cardExpiration"
                  validateStatus={errors.cexp == false ? 'error' : 'success'}
                  label="Expiration Date"
                  help={handleErrorMessage('cexp')}
                >
                  <Input
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onFocus={handleFocus}
                  />
                </Form.Item>
                <Form.Item
                  required
                  name="cardSecurityCode"
                  validateStatus={errors.ccvv == false ? 'error' : 'success'}
                  label="Security Code"
                  help={handleErrorMessage('ccvv')}
                >
                  <Input
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    placeholder="Security Code"
                    value={values.cardSecurityCode}
                    onFocus={handleFocus}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
