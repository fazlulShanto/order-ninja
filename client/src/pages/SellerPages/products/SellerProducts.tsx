import React, { useState ,useEffect} from 'react';
import style from './sellerproduct.module.css';
import SellerLayout from '../../../layout/Seller/SellerLayout';
import SellerProductTable from '../../../components/seller-product-table/SellerProductTable';
import useAuth from '../../../hooks/useAuth';




function SellerProducts() {
  const {upd,setUpd} = useAuth();
  const [tableUpdate , setTableUpdate] = useState(0);
  
  useEffect(()=>{
    console.log(new Date().toLocaleTimeString());
  },[tableUpdate,upd]);
  return (
    <SellerLayout>
        <div className={style['sellerProductContainer']}>
            <SellerProductTable tableUpdater = {setTableUpdate} />

        </div>
    </SellerLayout>
  );

}

export default SellerProducts