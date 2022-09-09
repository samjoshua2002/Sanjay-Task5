import React from "react";
import Layout from "layouts/MainLayout";
import { UseInput } from "@/hooks/useInput";
import { Button, Form, Input, message } from "antd";
import { isEmailValid, isPasswordVaild } from "@/utils/valid";
import AuthService from "@/api/services/AuthService";
import { useAppSelector, useAppDispatch } from '../../app/hooks/redux';

type Props = {};

const login = (props: Props) => {
  const {auth} = useAppSelector(state => state.authReducer)
  const {} = useAppSelector(state => state.authReducer)
  const dispatch = useAppDispatch()

  
  const email = UseInput("");
  const password = UseInput("");

  const login = () => {
    if(isPasswordVaild(password.value) && isEmailValid(email.value)){
      AuthService.login(email.value,password.value)
      if(auth){
        message.success('successful login');
      }else{
        message.error('incorrect password');
      }
    }else{
      message.error('enter correct email or password');
    }
  };

  return (
    <Layout col={1} title="Login">
      <div className="center">
        <Form
          className="container"
          name="login"
          initialValues={{ remember: true }}
          onFinish={login}
          autoComplete="off"
        >
          <Input placeholder="login" className="containerItem" {...email} />
          <Input.Password
            placeholder="password"
            className="containerItem"
            maxLength={32}
            minLength={8}
            {...password}
          />
          <Button type="primary" className="containerItem" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default login;
