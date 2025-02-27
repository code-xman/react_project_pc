import React, { useState } from 'react';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
// import { request } from 'umi'; // 或者根据你的项目实际情况替换为其他方式发起请求
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';

const CompleteProTableDemo = () => {
  const [loading, setLoading] = useState(false);
  // 模拟数据结构
  const columns: ProColumns<any>[] = [
    {
      dataIndex: 'index',
      valueType: 'index',
      width: 48,
      align: 'center',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 200,
      align: 'center',
      hideInForm: true, // 隐藏在搜索表单中
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 140,
      align: 'center',
      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        const state = form.getFieldValue('status');
        if (state === 'done') {
          return <div>已解决状态不支持修改</div>;
        }
        return defaultRender(item);
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      align: 'center',
      initialValue: 'todo',
      valueEnum: {
        doing: { text: '解决中', status: 'Warning' },
        todo: { text: '未解决', status: 'Error' },
        done: { text: '已解决', status: 'Success' },
      },
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      hideInSearch: true,
    },
  ];

  // 模拟数据获取函数
  const fetchTableData = async (params = {}) => {
    return {
      data: [
        {
          id: '10001',
          name: '张三',
          age: '20',
          status: 'doing',
          description:
            '这是一个描述这是一个描述这是一个描述这是一个描述这是一个描述这是一个描述这是一个描述这是一个描述这是一个描述',
        },
        {
          id: '10002',
          name: '李四',
          age: '24',
          status: 'done',
          description: '已经完成所有任务',
        },
        {
          id: '10003',
          name: '王五',
          age: '28',
          status: 'todo',
          description: '未开始处理',
        },
      ],
      success: true,
      total: 1,
    };
  };

  return (
    <ProTable
      headerTitle="ProTable表格"
      bordered
      columns={columns}
      style={{ width: '100%' }}
      loading={loading}
      request={(params, sorter, filter) => fetchTableData({ ...params, sorter, filter })}
      rowKey="id"
      pagination={{
        pageSize: 10,
        pageSizeOptions: ['10', '20', '50', '100'],
      }}
      search={{
        labelWidth: 'auto',
        defaultCollapsed: false, // 默认展开搜索表单
      }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
      ]}
      dateFormatter="string" // 将日期格式化为字符串
      options={{
        reload: true,
        density: true,
        setting: true,
      }}
    />
  );
};

export default CompleteProTableDemo;
