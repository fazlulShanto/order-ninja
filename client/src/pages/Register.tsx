/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Checkbox, Form, Input ,Switch} from "antd";

const onFinish = (values: any) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Register: React.FC = () => (
    <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item name ="user_class" label="Register as" valuePropName="checked">
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
);

export default Register;
