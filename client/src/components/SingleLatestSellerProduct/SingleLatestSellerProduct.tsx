import React from 'react'
import style from './single.module.css';
import { Avatar, Row ,Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface IComp{
    idx : number,
    product_name ?: string,
    value ?: number | string,
    img ? : string
}

function SingleLatestSellerProduct({idx ,product_name,value,img} : IComp ) {
    // console.log(img)
    return (
        <div className={style['latestSellProductDiv']}>
             <div className={style['productIdx']}>#{idx}</div>
             <div>
                <img src={img} width={32} height={32} alt="" />
             </div>
            <h4 className={style['nameDiv']}> {product_name} </h4>
            <div className="productPercentage">{value}</div> 
        </div>
      )
}

export default SingleLatestSellerProduct;