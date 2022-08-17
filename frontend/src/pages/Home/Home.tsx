import { useEffect, useState } from 'react';
import { Card, Avatar, Button } from 'antd';
import { DollarOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getCurrentBalance } from 'services/balance';
import { initBalance } from 'features/balance/balanceSlice';
import PaymentDialog from 'components/PaymentDialog/PaymentDialog';

const { Meta } = Card;

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const balance = useAppSelector((state) => state.balance.amount);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    getCurrentBalance().then((response) =>
      dispatch(initBalance(response.balance))
    );
  }, []);

  return (
    <>
      <Card
        style={{ width: 300 }}
        actions={[
          <Button type="primary" key="recharge" onClick={showModal}>
            <DollarOutlined />
            <span>Add Balance</span>
          </Button>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={`User Balance: ${balance}$`}
          description="try to recharge your balance again"
        />
      </Card>
      <PaymentDialog
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
}
