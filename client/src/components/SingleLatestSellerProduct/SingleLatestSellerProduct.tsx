import React from 'react'
import style from './single.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function SingleLatestSellerProduct({idx } : {idx : number}) {
    return (
        <div className={style['latestSellProductDiv']}>
            <div className="productIdx">#{idx}</div>
            <Avatar size={36} icon={<UserOutlined />} />
            <h4 className="productImg"> {'product name'} </h4>
            <div className="productPercentage">{80}%</div>
        </div>
      )
}

export default SingleLatestSellerProduct;