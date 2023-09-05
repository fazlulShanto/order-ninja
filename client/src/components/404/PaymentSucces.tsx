import React from 'react';
import { Button, Result } from 'antd';

const PaymentSucces: React.FC = () => (
  <Result
    status="success"
    title="Payment successful!"
    // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
    ]}
  />
);

export default PaymentSucces;

