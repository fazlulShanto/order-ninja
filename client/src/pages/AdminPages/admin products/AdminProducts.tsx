import React, { useEffect, useState } from 'react';
import CustomInstance from '../../../lib/axios';

import { Button, Input, Space, Table, Popconfirm, Avatar, Modal } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";

function AdminProducts() {

  const [productList,setProductList] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{

      const {data} = await CustomInstance.get('/product');
      console.log('🎁🎀✨',data);
      setProductList(data);
    };
    getProducts();

  },[]);

  const columns: ColumnsType<DataType> = [
    {
        title: "Image",
        render:(_,obj : any)=>{
            // console.log(_)
            const dfltUrl  = obj.images[0] ?? `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y`;

            return (<Avatar key={Math.random()} shape="square" size={64} src={dfltUrl} />)
        },
        key: "image",
        // width: columnSize.size
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "product_name",
        // width: "30%",
        // ...getColumnSearchProps("name"),
    },
    {
        title: "Current Stock",
        dataIndex: "stock",
        render:(_,el)=> el.stock-el.sold,
        key: "stock",
        sorter: (a : any, b : any) => a.stock- b.stock,
        // sortDirections: ["descend", "ascend"],
        width: "10%",
        // ...getColumnSearchProps("name"),
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        // width: "30%",
        sorter: (a : any, b : any) => a.price- b.price,
        // sortDirections: ["descend", "ascend"],
    },
    {
        title: "Total Ordered",
        dataIndex: "sold",
        key: "name",
        width: "10%",
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ["descend", "ascend"],
        // ...getColumnSearchProps("name"),
    },
    {
        title: "Supplier",
        dataIndex: "store[0].name",
        render : (_,el)=> el.store[0].name,
        key: "name",
        width: "15%",
        
        // ...getColumnSearchProps("name"),
    },
    // {
    //     title: "View",
    //     key: "age",
    //     render: (_, record) => {
    //         return (
    //                 <Button type="primary" onClick={()=> navigator(`/view-product`,{state : {
    //                     pid : record.id
    //                 }})} ghost>
    //                     View
    //                 </Button>
                
    //         );
    //     },
    //     width: "10%",
    // },
    
];


  return (
    <div>
      {productList.length ? <Table dataSource={productList} columns={columns} /> : null}
    </div>
  );
}

export default AdminProducts