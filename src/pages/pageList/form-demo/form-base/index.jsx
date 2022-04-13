import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { Form, Input, Button, Select, Table } from 'antd';
const { Option } = Select;

import './index.less';

const FormBase = () => {
  const [form] = Form.useForm();
  const [judgesList, setJudgesList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const OneJudges = (props) => {
    const { index } = props;
    return (
      <div className={cn('judges-items')}>
        <Form.Item
          label="姓名"
          key={'judgesName'}
          name={['judges', index, 'name']}
          className={cn('judges-item')}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="性别"
          key={'judgesSex'}
          name={['judges', index, 'sex']}
          className={cn('judges-item')}
        >
          <Select>
            <Option value="man">男</Option>
            <Option value="woman">女</Option>
          </Select>
        </Form.Item>
      </div>
    );
  };

  const addJudges = () => {
    const aPerson = {
      id: new Date().getTime(),
      name: '',
      sex: '',
    };
    setJudgesList([...judgesList, aPerson]);
  };

  const columns = [
    {
      title: '编号',
      dataIndex: 'key',
      render: (txt, row, index) => {
        const parent = ['person', index];
        return (
          <Form.Item
            name={[...parent, 'key']}
            colon={false}
            key={'key'}
            initialValue={row.key}
          >
            <Input bordered={false} disabled className={cn('person-key')} />
          </Form.Item>
        );
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      render: (txt, row, index) => {
        const parent = ['person', index];
        return (
          <Form.Item name={[...parent, 'name']} colon={false} key={'name'}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      render: (txt, row, index) => {
        const parent = ['person', index];
        return (
          <Form.Item name={[...parent, 'age']} colon={false} key={'age'}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: 150,
      render: (txt, row, index) => {
        const parent = ['person', index];
        return (
          <Form.Item name={[...parent, 'sex']} colon={false} key={'sex'}>
            <Select>
              <Option value="man">男</Option>
              <Option value="woman">女</Option>
            </Select>
          </Form.Item>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'actions',
      width: 80,
      render: (txt, row, index) => {
        return (
          <Button type="link" onClick={() => delPerson(row.key)}>
            删除
          </Button>
        );
      },
    },
  ];

  const addPerson = () => {
    const aPerson = {
      // table的数据需要key,除非有唯一的dataIndex
      key: new Date().getTime(),
      name: '',
      age: '',
      sex: undefined,
    };
    const tableData = form.getFieldValue('person') || [];
    const res = [...tableData, aPerson];
    form.setFieldsValue({ person: res });
    setDataSource(res);
  };

  const delPerson = (delKey) => {
    const tableData = form.getFieldValue('person') || [];
    const res = tableData.filter((item) => item.key !== delKey);
    form.setFieldsValue({ person: res });
    setDataSource(res);
  };

  const getFormData = () => {
    const data = form.getFieldsValue();
    console.log('data :>> ', data);
  };
  return (
    <div className={cn('flex-1', 'flex', 'y-center', 'column')}>
      <Form
        form={form}
        name="form-name"
        className={cn('flex-1')}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          label="比赛名称"
          key="name"
          name="name"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
        >
          <Input />
        </Form.Item>
        <div>
          评委
          {judgesList.map((item, index) => (
            <OneJudges key={item.id} index={index} {...item} />
          ))}
        </div>
        <div>
          选手
          <Table
            bordered
            size={'small'}
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            className={cn('person-table')}
          />
        </div>
      </Form>
      <div className={cn('btns')}>
        <Button onClick={addJudges}>添加评委</Button>
        <Button onClick={addPerson}>选手报名</Button>
        <Button onClick={getFormData}>获取数据</Button>
      </div>
    </div>
  );
};

export default FormBase;
