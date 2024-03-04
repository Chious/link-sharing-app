'use client';

import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import ImagePicker from './user-imagepicker';
import { useUser } from '@/context/user-context';
import { Profile } from '@/context/user-context';

type FieldType = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export default function UserProfileForm() {
  const { profile, setProfile } = useUser();
  const [pickedImage, setPickedImage] = useState(null);

  const onFinish = async (
    values: FieldType,
    pickedImage: null | File,
    oldValues: Profile | null
  ) => {
    let isUpdate = false;
    const { email, firstName, lastName } = values;

    //if values is same:
    if (
      email !== oldValues?.email ||
      firstName !== oldValues?.first_name ||
      lastName !== oldValues?.last_name
    ) {
      //update value;
      setProfile({
        email: email,
        first_name: firstName,
        last_name: lastName,
        image: oldValues.image,
      });
    }

    if (pickedImage !== null) {
      // update image
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='flex h-full grow flex-col items-end bg-white p-6 pb-8 pt-9'>
      <div className='form-main flex h-fit w-full flex-col gap-2'>
        <h1>Profile Details</h1>
        <h3>Add your details to create a personal touch to your profile</h3>
        <div className='flex h-2/5 items-center justify-start gap-4 rounded-lg bg-white-light p-5'>
          <h3 className='mr-32 text-gray'>Profile picture</h3>
          <ImagePicker
            name='image'
            defaultValue={profile?.image}
            pickedImage={pickedImage}
            setPickedImage={setPickedImage}
          />
          <h3 className=' w-64 leading-5 text-gray'>
            Image must be below 1024 x 1024px. Use PNG or JPG format
          </h3>
        </div>
        <Form
          className='relative h-fit rounded-lg bg-white-light p-5'
          onFinish={(value: any) => {
            onFinish(value, pickedImage, profile);
          }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            label='First name'
            name='firstName'
            rules={[
              { required: true, message: 'Please input your username!' },
              { min: 1, message: 'Please Enter First Name' },
            ]}
            labelCol={{ span: 10 }}
            className='w-full'
            initialValue={profile?.first_name}
          >
            <Input
              placeholder='e.g. John'
              className=' h-10 w-96'
              defaultValue={profile?.first_name}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label='Last name'
            name='lastName'
            rules={[
              { required: true, message: 'Please input your email!' },
              { min: 1, message: 'Please Enter Last Name' },
            ]}
            labelCol={{ span: 10 }}
            className='w-full'
            initialValue={profile?.last_name}
          >
            <Input
              placeholder='e.g. Appleseed'
              className=' h-10 w-96'
              defaultValue={profile?.last_name}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your username!' }]}
            labelCol={{ span: 10 }}
            className='w-full'
            initialValue={profile?.email}
          >
            <Input
              placeholder='e.g. alex@gmail.com'
              className=' h-10 w-96'
              defaultValue={profile?.email}
            />
          </Form.Item>
          <Button htmlType='submit' className='absolute -bottom-14 w-20'>
            Save
          </Button>
        </Form>
        <div className='divider m-1 w-full border border-solid border-white-light' />
      </div>
    </section>
  );
}
