import { Button } from 'antd'
import React,{useEffect} from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CustomInstance from '../../lib/axios';
import {loadStripe} from '@stripe/stripe-js';

const PUBLIK_KEY=`pk_test_51Nmyt3CG50qOeDLP00cDmo37GDCsYwjBrQBbQWFi3AJ2zlCtLUBXiDt58M1DehjfwObwS8NjRYrguvxdskFM0CW200bQ3sNSvB`;


function OrderPayment({next,amount,shipping}) {

    const {cartItems} = useShoppingCart();

    const createOrder  = async()=>{

        //place the order 
        // console.log(shipping)

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
                items :[...cartItems]
            };

            console.log(orderData);

            // const requ = await CustomInstance.post(`/order/create`,orderData);
        };
        orderPlace();

    }

    useEffect(()=>{



    },[]);

    const makePayment = async()=>{
        const stripe = await loadStripe(PUBLIK_KEY);

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
            items :[...cartItems]
        };

        const {data : session} = await CustomInstance.post(`/payment`,orderData);

        const result =await stripe?.redirectToCheckout({
            sessionId : session.id
        });

        if(result?.error){
            console.log(result.error);
        }
    }



  return (
    <div>
        <h3>  {amount}  </h3>
        <Button onClick={makePayment}>Pay done</Button>

    </div>
  )
}

export default OrderPayment