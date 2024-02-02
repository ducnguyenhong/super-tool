'use client'

import type { TableProps } from 'antd';
import { Button, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

interface DataType {
  key: string;
  title: string;
  createdAt: number;
  content: {user: string; money: number}[];
  totalMoney: number
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Sự kiện',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Thời gian',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (_, { createdAt }) => (
      <>
        {dayjs(createdAt).format('DD/MM/YYYY')}
      </>
    )
  },
  {
    title: 'Chi tiết',
    key: 'content',
    dataIndex: 'content',
    render: (_, { content }) => (
      <div className='flex flex-wrap gap-2'>
        {content.map(({user, money}) => {
          return (
            <Tag key={user}>
              {user} - {money}
            </Tag>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Tổng tiền',
    key: 'totalMoney',
    dataIndex: 'totalMoney',
  },
];

const data: DataType[] = [
  {
    key: '1',
    title: 'Ăn trưa',
    createdAt: 1706874392000,
    totalMoney: 100000,
    content: [
      {user: 'anh Hoan', money: 30000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
      {user: 'Hiếu', money: 33000},
    ],
  },
  {
    key: '2',
    title: 'Ăn trưa',
    createdAt: 1706874392000,
    totalMoney: 100000,
    content: [
      {user: 'anh Hoan', money: 30000}
    ],
  },
  {
    key: '3',
    title: 'Ăn trưa',
    createdAt: 1706874392000,
    totalMoney: 100000,
    content: [
      {user: 'anh Hoan', money: 30000}
    ],
  },
];

const BillList: React.FC = () => {
  return (
    <div className='min-h-screen w-2/3 mx-auto'>
      <div>
        <Link href="/bills/create">
          <Button type="default">
            Tạo mới
          </Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
  };

export default BillList;