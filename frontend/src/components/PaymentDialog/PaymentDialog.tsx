import { Modal, notification } from 'antd';
import CreditCard from 'components/CreditCard/CreditCard';
import { useState } from 'react';
import { rechangeBalanceAmount } from 'services/balance';
import { rechargeBalance } from 'features/balance/balanceSlice';
import { useAppDispatch } from 'app/hooks';

type PaymentDialogProps = {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
};

export default function PaymentDialog({
  isModalVisible,
  setIsModalVisible,
}: PaymentDialogProps) {
  const [isCreditCardNotVaild, setIsCreditCardNotVaild] = useState(true);
  const dispatch = useAppDispatch();

  const handleOk = async () => {
    await rechangeBalanceAmount();

    dispatch(rechargeBalance());

    notification.success({
      message: 'Success',
      description: 'Recharge Done Successfully',
    });

    setTimeout(() => {
      setIsModalVisible(false);
    }, 20000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleIsCreditCardVaild = (isVaild) => {
    setIsCreditCardNotVaild(isVaild);
  };

  return (
    <Modal
      title="Add Balance"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width="60%"
      okText="Charge 10$"
      okButtonProps={{ disabled: isCreditCardNotVaild }}
      destroyOnClose
    >
      <CreditCard isCreditCardVaild={handleIsCreditCardVaild} />
    </Modal>
  );
}
