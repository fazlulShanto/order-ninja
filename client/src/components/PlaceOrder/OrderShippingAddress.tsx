import React,{useEffect} from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';


function OrderShippingAddress() {
    const {delivery_fee,setDeliveryFee,cartItems} = useShoppingCart();

    useEffect(()=>{
        setDeliveryFee(30);
    
    },[])
    
  return (
    <div>OrderShippingAddress : {delivery_fee} </div>
  )
}

export default OrderShippingAddress