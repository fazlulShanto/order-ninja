import React,{useEffect,useState} from 'react';
import {Button, Table,Tag} from 'antd';
import CustomInstance from '../../../lib/axios';


function UserList() {

    const [userData,setuserData] = useState([]);

    useEffect(()=>{

        const userList = async()=>{
            const {data : userData} =await CustomInstance.get(`/public/user`);
            const nonAdmin = userData.filter ( v => v.role !='admin').map(v => ({...v,key : Math.random()}));
            console.log(nonAdmin);
            setuserData(nonAdmin);
        }

        userList();

    },[]);

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
         render : (_,record)=>{
            return (
                <div>
                    {record.first_name + " "+record.last_name}
                </div>
            );
         },
          key: 'name',
          width : '30%'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'User Type',
          render : (_,asset)=>{
            return ( _.role=='business' ? <Tag color="green">Business Owner</Tag> : <Tag color="magenta">supplier</Tag> )
          },
          key: 'role',
        },
        {
          title: 'Action',
          render : (_,record)=>{
            return (
                <Button type='primary' danger >Delete</Button>
            )
          },
          key: 'action',
        },
      ];
      
      return (
          <div>
              <Table size='small'  dataSource={userData} columns={columns} />
          </div>
  )
}

export default UserList