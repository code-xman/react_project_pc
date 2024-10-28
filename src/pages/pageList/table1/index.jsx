import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { Table } from 'antd';
import './index.less';

const table = () => {
  // 列
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      fixed: true,
      width: 140,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 120,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 800,
    },
    {
      title: '列一',
      dataIndex: 'col1',
      key: 'col1',
      width: 1000,
    },
    {
      title: '列二',
      dataIndex: 'col2',
      key: 'col2',
      width: 1000,
    },
    {
      title: '列三',
      dataIndex: 'col3',
      key: 'col3',
      width: 1000,
    },
  ];

  // 数据
  const dataSource = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push({
        key: 'x00' + i,
        name: 'x00' + i,
        age: i,
        address: 'x00' + i,
        col1: 'col1-' + i,
        col2: 'col2-' + i,
        col3: 'col3-' + i,
        col4: 'col4-' + i,
        col5: 'col5-' + i,
      });
    }
    return arr;
  }, []);

  const [currentNum, setCurrentNum] = useState(1);

  return (
    <div className={cn('table-box')}>
      <Table
        dataSource={dataSource}
        columns={columns}
        className={cn('table')}
        pagination={{
          current: currentNum,
          defaultPageSize: 10,
          total: dataSource.length,
          pageSizeOptions: [10, 20, 50, 100],
          showTotal: () => `共 ${dataSource.length} 条`,
          onChange: (page) => {
            setCurrentNum(page);
          },
        }}
        bordered
        scroll={{
          x: 'calc(100% - 20px)',
          y: 'calc(100vh - 40px - 24px - 20px - 64px - 54px)',
        }}
      />
    </div>
  );
};

export default table;
