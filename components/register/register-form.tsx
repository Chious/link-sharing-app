'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

async function createUser(email: any, password: any) {
  const response = await fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const onFinish = async (values: any) => {
  const { email, password } = values;

  //if login

  //if not login
  try {
    const result = await createUser(email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  confirm?: string;
};

const RegisterForm: React.FC = () => {
  return (
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
          name='email'
          rules={[
            { required: true, message: 'Please input your email!' },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid Email!',
            },
          ]}
          labelCol={{ span: 12 }}
          className='w-full'
        >
          <Input placeholder='e.g. alex@gmail.com' className=' h-10 w-96' />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 8, message: 'Password must contain at least 8 characters' },
          ]}
        >
          <Input.Password
            placeholder='Enter your password'
            className=' h-10 w-96'
          />
        </Form.Item>

        <Form.Item<FieldType>
          label='Confirm password'
          name='confirm'
          labelCol={{ span: 12 }}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
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
};

export default RegisterForm;
