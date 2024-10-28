import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { Form, Input, Button, Select, Table, Checkbox } from 'antd';
const { Option } = Select;

import './index.less';

const FormBase = () => {
  const [form] = Form.useForm();
  const [judgesList, setJudgesList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const testData = {
    judges: [
      { name: '张三', sex: 'man', id: '1650595343100' },
      { name: '李四', sex: 'woman', id: '1650595343200' },
    ],
    name: '全球职业大赛(30岁以下组)',
    person: [
      { key: '1650595343300', name: '王五', age: '18', sex: 'man' },
      { key: '1650595343572', name: '赵六', age: '19', sex: 'man' },
      { key: '1650595343908', name: '钱七', age: '20', sex: 'woman' },
    ],
  };
  const [data, setData] = useState(testData);

  const limitChange = (val) => {
    if (val.length > 0) {
      const res = val[val.length - 1];
      form.setFieldsValue({ limit: [res] });
    }
  };

  const OneJudges = (props) => {
    const { index } = props;
    return (
      <div className={cn('judges-items')}>
        <Form.Item
          label="姓名"
          key={'judgesName'}
          name={['judges', index, 'name']}
          className={cn('judges-item')}
          rules={[{ required: true, message: '必填' }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item key={'id'} hidden={true} name={['judges', index, 'id']}>
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
        <Button
          className={cn('judges-delBtn')}
          onClick={() => delJudges(props.id)}
        >
          删除
        </Button>
      </div>
    );
  };

  const addJudges = () => {
    const aPerson = {
      id: new Date().getTime().toString(),
      name: '',
      sex: '',
    };
    setJudgesList([...judgesList, aPerson]);
  };

  const delJudges = (delId) => {
    const tableData = form.getFieldValue('judges') || [];
    const res = tableData.filter((item) => item.id !== delId);
    form.setFieldsValue({ judges: res });
    setJudgesList(res);
  };

  const ageValidator = (rule, value) => {
    console.log('object :>> ', { rule, value });
    if (value && Number(value) >= 30) {
      return Promise.reject(new Error('年龄超出限制'));
    }
    return Promise.resolve();
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
          <Form.Item
            name={[...parent, 'name']}
            colon={false}
            key={'name'}
            rules={[{ required: true, message: '必填' }]}
          >
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
          <Form.Item
            name={[...parent, 'age']}
            colon={false}
            key={'age'}
            rules={[
              { required: true, message: '必填' },
              { validator: ageValidator },
            ]}
          >
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
      key: new Date().getTime().toString(),
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

  const setFormData = () => {
    setJudgesList(data.judges);
    setDataSource(data.person);
    form.setFieldsValue(data);
  };

  const getFormData = () => {
    form.validateFields().then((res) => {
      // const data = form.getFieldsValue();
      // console.log('data :>> ', data);
      console.log('res :>> ', res);
      if (res) {
        setData({
          ...res,
          judges: res.judges || [],
          person: res.person || [],
        });
      }
    });
  };

  const validatorFn = (rule, value) => {
    console.log('rule :>> ', rule);
    console.log('value :>> ', value);
    if (value && value.length === 1) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('请选择一条条件限制'));
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
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="条件限制"
          key="limit"
          name="limit"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          tooltip={'最多有一条条件限制'}
          rules={[{ required: true, validator: validatorFn }]}
        >
          <Checkbox.Group onChange={limitChange}>
            <Checkbox value={'height'}>身高限制</Checkbox>
            <Checkbox value={'weight'}>体重限制</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <div>
          评委
          {!judgesList || (judgesList.length < 1 && <p>暂无评委</p>)}
          {judgesList?.map((item, index) => (
            <OneJudges key={item.id} index={index} {...item} />
          ))}
        </div>
        <div>
          选手
          <Form.Item
            key="person"
            name="person"
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: '至少需要有一个选手参赛' }]}
          >
            <Table
              bordered
              size={'small'}
              pagination={false}
              columns={columns}
              dataSource={dataSource}
              className={cn('person-table')}
            />
          </Form.Item>
        </div>
      </Form>
      <div className={cn('btns')}>
        <Button onClick={addJudges}>添加评委</Button>
        <Button onClick={addPerson}>选手报名</Button>
        <Button onClick={setFormData}>设置数据</Button>
        <Button onClick={getFormData}>保存数据</Button>
      </div>
    </div>
  );
};

export default FormBase;
