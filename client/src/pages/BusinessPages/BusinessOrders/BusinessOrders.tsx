import React, { useEffect ,useState } from 'react';
import style from './sellerorder.module.css';
import CustomInstance from '../../../lib/axios';
import { Button, Space, Table, Tag,Avatar,Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function BusinessOrders() {

  const userId = localStorage.getItem('user_id');

  const [orderList ,setOrderList] = useState([]);
  const [upd,setUpd] = useState(Date.now());

  useEffect(()=>{
    const getOrderlist = async ()=>{

      const res= await CustomInstance.get(`/order/user/${userId}`);
      console.log(res.data);

      setOrderList(res.data);
    };
    getOrderlist();
    console.log('rendered ',new Date().toLocaleTimeString())

  },[upd]);

  const handleConfim = async (el)=>{
      // console.log(`confirmed order id  ; ${orderId}`);
      const rs = await CustomInstance.post(`/order/confirm`,{order_id :el.id ,product_id :el.product_id  ,amount : el.quantity});
      console.log(rs);
      setUpd(Date.now());
  };


  const columns: ColumnsType<DataType> = [
    {
      title: 'Image',
      key: 'image',
      render:(_,obj : any)=>{
                // console.log(_)
                const dfltUrl  = obj.product[0].images[0] ?? `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y`;

                // console.log(`🎍🎆🎆🎆🎇✨✨🎃🎊🎇`,obj.product[0].images[0])
                // const dfltUrl  = obj.images[0] ?? `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y`;

                return (<Avatar key={Math.random()} shape="square" size={64} src={dfltUrl} />)
            },
    },

    {
      title: 'Order Id',
      // dataIndex: 'product_name',
      key: 'name',
      render : (_,el)=>{
        return <p> {el.id.split('-').pop()} </p>
      }
    },
    {
      title: 'Name',
      dataIndex: 'product_name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Weight',
      dataIndex: 'total_weight',
      key: 'quantity1',
    },
    {
      title: 'Order Type',
      dataIndex: 'order_type',
      key: 'order_type',
    },
    {
      title: 'Total Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render:(_,el)=>{
        if(el.status.endsWith('onfirmed')){
          return <Tag style={{padding:'2px 4px'}} color="blue">Confirmed</Tag>;
        }
        if(el.status.endsWith('ending')){
          return <Tag style={{padding:'2px 4px'}} color="red"> {el.status} </Tag>;
        }
        if(el.status.endsWith('elivered')){
          return <Tag style={{padding:'2px 4px'}} color="green"> {el.status} </Tag>;
        }
      },
      key: 'status',
    }
  ];
  
  return (
    <div >
        {orderList.length ? <Table pagination={{defaultPageSize:7}} columns={columns} dataSource={orderList} /> : null}
    </div>
  )
}
//  
export default BusinessOrders


