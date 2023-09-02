import React, { useEffect,useContext } from 'react';
import BusinessLayout from '../../layout/Bussiness/BusinessLayout';
import  { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

import OrderShippingAddress from './OrderShippingAddress';
import cartContext from '../../context/ShoppingCartContext';
import useAuth from '../../hooks/useAuth';
import OrderSummary from './OrderSummary';

// function orderSummary(cartObj)=>{

// }

function PlaceOrder() {

    
   const [addressInfo,setAddressInfo] = useState({});

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
        title: 'Order Summary',
        content: <OrderSummary  />,
    },
    {
        title: 'Shopping Address',
        content: <OrderShippingAddress />,
    },
    {
      title: 'Payment',
      content: 'Last-content',
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title })); 

  return (
    <BusinessLayout>
      <Steps current={current} items={items} />
      <div style={{backgroundColor:'gray',marginTop:'16px',padding:"16px"}}>{steps[current].content}</div>

      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </BusinessLayout>
  )
}

export default PlaceOrder;