import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
`;
const SignIn = () => {

  const [oldData, setOldData] = useState();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value});
  };

  const navigate = useNavigate()

  const Submit = ()=> {
      const faiz =  JSON.parse(localStorage.getItem("value"));
      
      setOldData(faiz);

        if (data.email === oldData.email && data.password === oldData.password) {
            navigate("/Dashboard")
        }else{
            navigate("/Error")
        }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input name="email"
          onChange={handleChange}/>
        </Form.Item>

        <Form.Item
          label="Password"
          
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password"
          onChange={handleChange} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={Submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
