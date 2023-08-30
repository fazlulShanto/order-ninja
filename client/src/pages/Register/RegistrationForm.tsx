/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Switch ,notification} from "antd";
import style from "./Register.module.css";
import CustomInstance from "../../lib/axios";
import { AxiosError } from "axios";




const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const RegistrationForm: React.FC = () =>{
    
    // const getOtp = ()=>{
    //     console.log(`getting OTP`);
    // }
    const navi = useNavigate();
    const onFinish = async (values: any) => {
        console.log("Success:", values);
        try {
            const userObj = {
                first_name:"my first ame",
                last_name : "my lastname",
                isbussiness : values.user_class,
                password : values.password,
                email : values.email
            }
            await CustomInstance.post('/register',userObj);
            navi('/login');
        } catch (error) {
    
            const err : any = (error as AxiosError).response?.data;
            notification.error({
                message : err.error
            });
        }
    };
    
   return (
    <div className={style.formWrapper}>
        <div className={style.formDiv}>
    <Form
        name="basic"
        labelCol={{ span: 4 }}
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth:'600px'}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <h1 className={style.formHeader}>Test</h1>
        <Form.Item<FieldType>
            label="Email"
            name="email"
            className={"test"}
            rules={[{ required: true,type:'email' , message: "Please input your Email!" }]}
        >
            <Input />
        </Form.Item>
        {/* <Form.Item name='otp' label="Enter OTP">
        <Space.Compact
            style={{
                width: "100%",
            }}
        >
            <Input />
            <Button type="primary" onClick={getOtp}>Get OTP</Button>
        </Space.Compact> 
        </Form.Item>*/}
        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            name="user_class"
            label="Register as"
            valuePropName="checked"
        >
            <Switch
                checkedChildren="supplier"
                unCheckedChildren="Bussiness Owner"
                size="default"
            />
        </Form.Item>
        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
        >
            <Checkbox>Accept T&C</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    </div>
    </div>
)};

export default RegistrationForm;
