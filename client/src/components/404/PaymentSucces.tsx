import React,{useEffect} from 'react';
import { Button, Result } from 'antd';
import { useLocation, useNavigate ,useParams} from 'react-router-dom';



const PaymentSucces: React.FC = () => {

  const navigator  = useNavigate();
  const loc = useLocation();



  useEffect(()=>{

    localStorage.removeItem('shopping-cart');

  },[]);

  const handleClick = ()=>{
    
    const paymentId = (new URLSearchParams(loc.search).get('id'));
    navigator('/marketplace');
    //verify 

  }


 return <Result
    status="success"
    title="Payment successful!"
    // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button onClick={handleClick} type="primary" key="console">
        Go Back to Marketplace
      </Button>,
    ]}
  />
  };

export default PaymentSucces;

