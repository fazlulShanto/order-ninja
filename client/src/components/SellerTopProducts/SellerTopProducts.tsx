import React from 'react';
import SingleLatestSellerProduct from '../SingleLatestSellerProduct/SingleLatestSellerProduct';

const stl  : React.CSSProperties = {
    overflowY:'auto',
    height:'calc(56vh - 230px)',
    padding:'8px',
    // border:'1px solid red'
}

function SellerTopProducts() {
  return (
    <div >
        <h3>Top Products</h3>
        <div style={stl}>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            <SingleLatestSellerProduct idx={1}/>
            
        </div>
    </div>
  )
}

export default SellerTopProducts