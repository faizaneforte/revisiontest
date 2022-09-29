import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import 'antd/dist/antd.css'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
`;





const SignUp = () => {
const[newData, setNewData] = useState(false)
const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
});

const navigate = useNavigate()

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})

    setNewData(true)
}
console.log(data);

const Submit =()=>{
    if(newData) {
      localStorage.setItem("value",JSON.stringify(data))
        navigate("/SignIn")
    }
}

  const onFinish = (values) => {
    console.log('Success:', values);
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        label="Name"
       
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input  name="name"
        onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Email"
       
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input  name="email"
        onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password name="password"
        onChange={handleChange}/>
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
        <Button 
        type="primary" 
        htmlType="submit" 
        onClick={Submit}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Wrapper>
  );
};

export default SignUp;