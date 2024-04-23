import React, { useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  price: number;
  origin: string;
}

const columns: TableProps<DataType>['columns'] = [

  {
    title: 'Action',
    dataIndex: "action",
    key: 'key',
    render: (key, record, index) => (
      <Button type='primary' onClick={() => {
        setFilteredData(data.filter(x => x.name !== record.name));
      }}>
        Delete
      </Button>
    )
  },
  // ...
];

const data: DataType[] = [
  // ... your data
];

const Demo2103: React.FC = () => {
  const [filteredData, setFilteredData] = useState(data); // Initialize state with data

  return (
    <div>
      <Table columns={columns} dataSource={filteredData} />
      <button onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}>
        Logout
      </button>
    </div>
  );
};

export default Demo2103;
