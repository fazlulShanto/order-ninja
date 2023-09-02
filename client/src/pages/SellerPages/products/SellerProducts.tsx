import React, { useState ,useEffect} from 'react';
import style from './sellerproduct.module.css';
import SellerLayout from '../../../layout/Seller/SellerLayout';
import SellerProductTable from '../../../components/seller-product-table/SellerProductTable';
import useAuth from '../../../hooks/useAuth';
import CreateNewProduct from '../../../components/creaete-new-product/CreateNewProduct';


function SellerProducts() {

  const [tableUpdate , setTableUpdate] = useState(false);
  
  const handleTable = ()=>{
    console.log('update table',new Date().toLocaleTimeString());
    setTableUpdate(!tableUpdate);
  }

  useEffect(()=>{
      console.log(`updating  : `,tableUpdate);
  },[tableUpdate]);

  return (
    <SellerLayout>
        <div className={style['sellerProductContainer']}>
            <CreateNewProduct updater = {handleTable} />
            <SellerProductTable updateValue={tableUpdate} tableUpdater = {handleTable} />
        </div>
    </SellerLayout>
  );

}

export default SellerProducts