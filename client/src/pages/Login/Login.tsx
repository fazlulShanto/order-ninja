/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import { Button, Checkbox, Form, Input, notification } from "antd";
import CustomInstance from "../../lib/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IUserContext } from "../../Interface/IUserContext";
import {
  getLocalUserInfo,
  setLocalUserInfo,
} from "../../utils/helpers/setUserLocalInfo";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { handleErrorMessage } from "../../services/pureFunction";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigator = useNavigate();
  const { setUserId, setRole, setName, setLoggedIn, setToken, setEmail } =
    useAuth();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      const result = await CustomInstance.post("/login", { ...values });
      console.log("i am here ", result);
      const info = result.data as IUserContext;
      // console.log("i am here ", info);

      setUserId(info.id);
      setName(info.name);
      setRole(info.role);
      setLoggedIn(true); //change by tonmoy
      setToken(info.token);
      setEmail(info.email);

      setLocalUserInfo({
        ...info,
        raw_user: JSON.stringify(result),
        loggedIn: true,
      });

      navigator("/dashboard");
    } catch (error) {
      console.log(error);
      // const err : any = (error as AxiosError).response?.data;
      const errMsg = handleErrorMessage(error);
      notification.error({
        message: errMsg,
      });
    }
  };

  // useEffect(() => {
  //   const res = getLocalUserInfo();
  //   if(res.loggedIn && res.token){
  //     // navigator('/dashboard');
  //   }
  // });

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "16px" }}>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
