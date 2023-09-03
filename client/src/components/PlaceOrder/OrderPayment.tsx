import { Button } from 'antd'
import React from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CustomInstance from '../../lib/axios';


function OrderPayment({next,amount,shipping}) {

    const {cartItems} = useShoppingCart();

    const createOrder  = async()=>{

        //place the order 
        console.log(shipping)

        const orderPlace =async () => {

            const orderData = {
                user_id  : localStorage.getItem('user_id'),
                address : {
                    city  : shipping.city,
                    zone : shipping.zone,
                    area : shipping.area,
                    address : shipping.address,
                    phone : shipping.phone
                },
                order_type : shipping.order_type,
                price : amount,
                order_date : shipping['order_date'],
                items :{...cartItems}
            };

            // console.log(orderData);

            const requ = await CustomInstance.post(`/order`,orderData);
        };
        orderPlace();

    }

  return (
    <div>
        <h3>  {amount}  </h3>
        <Button onClick={createOrder}>Pay done</Button>

    </div>
  )
}

export default OrderPayment