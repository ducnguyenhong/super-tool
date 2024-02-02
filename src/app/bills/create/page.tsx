'use client';

import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';
import React from 'react';

type FieldType = {
  title: string;
  content: any;
  createdDate: number;
  type: 'ALL' | 'SINGLE';
  note?: string;
};

const BillCreate: React.FC = () => {
  const [form] = Form.useForm<{ name: string; age: number }>();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const plainOptions = ['Đức', 'a Hoan', 'Hiếu', 'Hoan', 'Đại', 'Hải', 'Tuyển', 'Quang'];

  const type = Form.useWatch('type', form);

  return (
    <div className="min-h-screen w-2/3 mx-auto pt-20">
      <div className="bg-white shadow-sm rounded-md py-10 px-20">
        <p className="text-center uppercase font-semibold text-lg mb-10">Tạo thông tin ăn trưa</p>
        <div className="flex flex-col justify-center items-center flex-1">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ width: 400 }}
            initialValues={{ type: 'ALL', title: 'having-lunch' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType> label={<p className="font-semibold">Sự kiện</p>} labelCol={{ span: 24 }} name="title">
              <Select
                style={{ width: 400 }}
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
            >
              <DatePicker style={{ width: 400 }} />
            </Form.Item>

            <Form.Item<FieldType> label={<p className="font-semibold">Ghi chú</p>} labelCol={{ span: 24 }} name="note">
              <Input style={{ width: 400 }} />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className="font-semibold">Phương thức nhập</p>}
              labelCol={{ span: 24 }}
              name="type"
            >
              <Select
                style={{ width: 400 }}
                options={[
                  { value: 'ALL', label: 'Tất cả' },
                  { value: 'SINGLE', label: 'Từng người' }
                ]}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className="font-semibold">Danh sách người</p>}
              labelCol={{ span: 24 }}
              name="users"
            >
              <Checkbox.Group options={plainOptions} />
            </Form.Item>

            {type === 'ALL' && (
              <Form.Item<FieldType>
                label={<p className="font-semibold">Số tiền từng người</p>}
                labelCol={{ span: 24 }}
                name="note"
              >
                <Input style={{ width: 400 }} />
              </Form.Item>
            )}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BillCreate;
