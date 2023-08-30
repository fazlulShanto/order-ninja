import React, { Dispatch, SetStateAction } from "react";
import { Button, Checkbox, Form, Input } from 'antd';



const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
    first_name ?: string,
    last_name ?: string,
    email?: string;
    password?: string;
};

interface Mycomp {
    setC: Dispatch<SetStateAction<number>>;
    setValue: Dispatch<SetStateAction<string>>;
}


const RegisterStep2: React.FC<Mycomp> = ({setC,setValue}) => {

    const onFinish = (values: any) => {
        // console.log('Success:', values);
        
        setValue(values.email);
        setC(0);
      };
    return (
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label=""
          name="first_name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='First Name'/>
        </Form.Item>
        <Form.Item<FieldType>
          label=""
          name="last_name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='Last Name'/>
        </Form.Item>
    
        <Form.Item<FieldType>
          label=""
          name="email"
          rules={[{ required: true, type : 'email' ,message: 'Please enter your email' }]}
        >
          <Input placeholder='Enter email' />
        </Form.Item>
        <Form.Item<FieldType>
          label=""
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='enter your password'/>
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    )
};

export default RegisterStep2;