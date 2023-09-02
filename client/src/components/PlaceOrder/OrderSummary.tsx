import React, { useEffect } from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Row ,Col} from 'antd';

function OrderSummary() {
    const {delivery_fee,setDeliveryFee,cartItems}  = useShoppingCart();

    useEffect(()=>{
        console.log(cartItems)

        //get cart item data from db
        //get pathao bill
        // cal culate total

    },[])

  return (
    <Row>
            {cartItems.map(v =>  <div key={Math.random()}> {v.id} </div> )}
    </Row>
  )
}

export default OrderSummary