'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { getSession, signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const onFinish = async (values: FieldType) => {
  const result = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const { status } = useSession();

  useEffect(() => {
    console.log('status: ', status);
    if (status === 'authenticated') {
      redirect('/user/link');
    }
  }, [status]);

  return (
    <div className='container flex w-auto flex-col items-start justify-center gap-6 bg-white p-10'>
      <h1>Login</h1>
      <h3 className=' text-gray'>
        Add your details below to get back into the app
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
            { required: true, message: 'Please input your username!' },
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

        <div className='btn-group flex flex-col items-center justify-center gap-2'>
          <Button
            type='primary'
            htmlType='submit'
            className=' h-10 w-96 bg-purple-dark hover:bg-purple'
          >
            Submit
          </Button>

          <h3>
            {`Don't have an account?`}{' '}
            <span className=' text-purple-dark'>
              <Link href='/register'>Create account</Link>
            </span>
          </h3>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
