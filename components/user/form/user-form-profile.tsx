'use client';

import { Button, Form, Input } from 'antd';
import ImagePicker from './user-imagepicker';

type FieldType = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export default function UserProfileForm() {
  return (
    <section className='flex h-full grow flex-col items-end bg-white p-6 pb-8 pt-9'>
      <div className='form-main flex h-fit w-full flex-col gap-2'>
        <h1>Profile Details</h1>
        <h3>Add your details to create a personal touch to your profile</h3>
        <div className='flex h-2/5 items-center justify-start gap-4 rounded-lg bg-white-light p-5'>
          <h3 className='mr-32 text-gray'>Profile picture</h3>
          <ImagePicker name='image' />
          <h3 className=' w-64 leading-5 text-gray'>
            Image must be below 1024 x 1024px. Use PNG or JPG format
          </h3>
        </div>
        <Form className='h-fit rounded-lg bg-white-light p-5'>
          <Form.Item<FieldType>
            label='First name'
            name='firstName'
            rules={[{ required: true, message: 'Please input your username!' }]}
            labelCol={{ span: 10 }}
            className='w-full'
          >
            <Input placeholder='e.g. John' className=' h-10 w-96' />
          </Form.Item>
          <Form.Item<FieldType>
            label='Last name'
            name='lastName'
            rules={[{ required: true, message: 'Please input your email!' }]}
            labelCol={{ span: 10 }}
            className='w-full'
          >
            <Input placeholder='e.g. Appleseed' className=' h-10 w-96' />
          </Form.Item>
          <Form.Item<FieldType>
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your username!' }]}
            labelCol={{ span: 10 }}
            className='w-full'
          >
            <Input placeholder='e.g. alex@gmail.com' className=' h-10 w-96' />
          </Form.Item>
        </Form>
        <div className='divider m-1 w-full border border-solid border-white-light' />
        <Button className='w-20'>Save</Button>
      </div>
    </section>
  );
}
