import React, { useState } from 'react';
import { Button, Popover ,Avatar} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getLocalUserInfo } from '../../utils/helpers/setUserLocalInfo';



const url = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`;

function UserAvatar(){

    const userData = getLocalUserInfo();


    return (
        <div style={{display:'flex',alignItems:'center',gap : '8px'}}>
            <Avatar  src={url}  style={{height:'60px',width:'60px'}}  />
            <div>

            <p style={{fontSize:'1.1rem',fontWeight:'500'}} >
                {userData.name}
            </p>
            <p style={{fontSize:'.9rem',fontWeight:'500'}} >
                {userData.role}
                </p>
            </div>
            <DownOutlined />
        </div>
    );
}


const UserProfile: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    // <Popover placement="bottom"  content={"test"} trigger="hover">
    <Popover placement="bottom" >
        
        <button>
            <UserAvatar />
        </button>
        
      </Popover>
  );
};

export default UserProfile;