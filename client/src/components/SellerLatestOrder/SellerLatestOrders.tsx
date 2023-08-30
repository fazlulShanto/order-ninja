import React from 'react';
import SingleLatestSellerProduct from '../SingleLatestSellerProduct/SingleLatestSellerProduct';
import style from './Sellerorders.module.css';

function SellerLatestOrders() {
  return (
    <div className={[style["latestSales"]].join(" ")}>
                    <h2>Latest Sales</h2>
                    <SingleLatestSellerProduct idx={1}/>
                    <SingleLatestSellerProduct idx={2}/>
                    <SingleLatestSellerProduct idx={3}/>
                    <SingleLatestSellerProduct idx={4}/>
                    <SingleLatestSellerProduct idx={5}/>
                    <SingleLatestSellerProduct idx={2}/>
                    <SingleLatestSellerProduct idx={3}/>
    </div>
  )
}

export default SellerLatestOrders