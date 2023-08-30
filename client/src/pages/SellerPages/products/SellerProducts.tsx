import React from 'react';
import style from './sellerproduct.module.css';
import SellerLayout from '../../../layout/Seller/SellerLayout';
import SellerProductTable from '../../../components/seller-product-table/SellerProductTable';




function SellerProducts() {

  return (
    <SellerLayout>
        <div className={style['sellerProductContainer']}>
            <SellerProductTable />

        </div>
    </SellerLayout>
  );

}

export default SellerProducts