'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  confirm?: string;
  remember?: string;
};

const RegisterForm: React.FC = () => (
  <div className='container flex w-auto flex-col items-start justify-center gap-6 bg-white p-10'>
    <h1>Create account</h1>
    <h3 className=' text-gray'>
      {`Let's get you started sharing your links!`}
    </h3>
    <Form
      layout='vertical'
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      className='w-full'
    >
      <Form.Item<FieldType>
        label='Email address'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
        labelCol={{ span: 12 }}
        className='w-full'
      >
        <Input placeholder='e.g. alex@gmail.com' className=' h-10 w-96' />
      </Form.Item>

      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          placeholder='Enter your password'
          className=' h-10 w-96'
        />
      </Form.Item>

      <Form.Item<FieldType>
        label='Confirm password'
        name='confirm'
        rules={[{ required: true, message: 'Please input your password!' }]}
        labelCol={{ span: 12 }}
      >
        <Input.Password
          placeholder='Enter your password'
          className=' h-10 w-96'
        />
      </Form.Item>

      <h4 className=' pb-4 text-gray'>
        Password must contain at least 8 characters
      </h4>

      <div className='btn-group flex flex-col items-center justify-center gap-2'>
        <Button
          type='primary'
          htmlType='submit'
          className=' h-10 w-96 bg-purple-dark hover:bg-purple'
        >
          Create new account
        </Button>
        <h3>
          {`Already have an account?`}{' '}
          <span className=' text-purple-dark'>
            <Link href='/'>Login</Link>
          </span>
        </h3>
      </div>
    </Form>
  </div>
);

export default RegisterForm;
