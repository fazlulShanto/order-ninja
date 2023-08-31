import React from 'react';
import style from './productcard.module.css';
import { Card ,Image} from 'antd';


function SingleProductCard({productInfo} : any) {
    console.log(`🎇🎈 `,productInfo);

  return (
    <div className={style['cardContainer']}>
        <Image width={'150px'}  src={productInfo.images[0]}></Image>
        <h5>{productInfo.name}</h5>
    </div>
  )
}

export default SingleProductCard