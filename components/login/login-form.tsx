"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

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

const LoginForm: React.FC = () => (
  <div className="container bg-white w-auto p-10 flex items-start justify-center flex-col gap-6">
    <h1>Login</h1>
    <h3 className=" text-gray">
      Add your details below to get back into the app
    </h3>
    <Form
      layout="vertical"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-full"
    >
      <Form.Item<FieldType>
        label="Email address"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        labelCol={{ span: 12 }}
        className="w-full"
      >
        <Input placeholder="e.g. alex@gmail.com" className=" w-96 h-10" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="Enter your password"
          className=" w-96 h-10"
        />
      </Form.Item>

      <div className="btn-group flex flex-col justify-center items-center gap-2">
        <Button
          type="primary"
          htmlType="submit"
          className=" bg-purple-dark hover:bg-purple w-96 h-10"
        >
          Submit
        </Button>
        <h3>
          {`Don't have an account?`}{" "}
          <span className=" text-purple-dark">
            <Link href="/register">Create account</Link>
          </span>
        </h3>
      </div>
    </Form>
  </div>
);

export default LoginForm;
