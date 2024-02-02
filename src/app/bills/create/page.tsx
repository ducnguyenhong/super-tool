'use client';

import { Button, Checkbox, DatePicker, Form, Select } from 'antd';
import React from 'react';

type FieldType = {
  title: string;
  content: any;
  createdDate: number;
  type: 'ALL' | 'SINGLE';
};

const BillCreate: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const plainOptions = ['Đức', 'a Hoan', 'Hiếu', 'Hoan', 'Đại', 'Hải', 'Tuyển', 'Quang'];

  return (
    <div className="min-h-screen w-2/3 mx-auto bg-white mt-20">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={<p className="font-semibold">Sự kiện</p>}
          labelCol={{ span: 24 }}
          name="title"
          rules={[{ required: true }]}
        >
          <Select
            defaultValue="having-lunch"
            style={{ width: 120 }}
            options={[
              { value: 'having-lunch', label: 'Ăn trưa' },
              { value: 'afternoon-snack', label: 'Ăn chiều' },
              { value: 'iced-tea', label: 'Trà đá' }
            ]}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className="font-semibold">Thời gian</p>}
          labelCol={{ span: 24 }}
          name="createdDate"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className="font-semibold">Phương thức nhập</p>}
          labelCol={{ span: 24 }}
          name="type"
          rules={[{ required: true }]}
        >
          <Checkbox.Group options={plainOptions} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BillCreate;
