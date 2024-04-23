import { Input, Table } from "antd";
import { useState } from "react";

const Text1 = () => {
  const columns = [
    { title: 'student code', dataIndex: 'studentCode', key: 'studentCode' },
    { title: 'student Name', dataIndex: 'studentName', key: 'studentName' },
    { title: 'final Test', dataIndex: 'result', key: 'result' },
    { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' },
  ];
  const data = [
    { studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
    { studentCode: '0909002', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai' },
    { studentCode: '0909003', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM' },
    { studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang' },
    { studentCode: '0909005', studentName: 'Lê Văn Thắng', result: 8, hometown: 'Khánh Hòa' },
  ];
  const myProvinces = ['TPHCM', 'Đồng Nai'];
  const [searchText, setSearchText] = useState(''); // Define search text state
  const [searchData, setSearchData] = useState(data); // Define search data state

  return (
    <div style={{ display: 'inline' }}>
      <div>
        Find student by name:
        <Input type="text" value={searchText} onChange={(e) => setSearchText(e.currentTarget.value)} // Corrected typo
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setSearchData(data.filter(x => x.studentName.toLowerCase().includes(searchText)));
            }
          }}
        />
        <input type="checkbox" />&nbsp;TPHCM&nbsp;
        <input type="checkbox" />&nbsp;Khánh Hòa&nbsp;
      </div>
      <Table columns={columns} dataSource={searchData} />
    </div>
  );
};

export default Text1;
