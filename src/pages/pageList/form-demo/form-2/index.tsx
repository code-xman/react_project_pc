import type { ProFormInstance, SubmitterProps, FormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormRadio,
  ProFormDigit,
  ProFormDatePicker,
  ProFormDateRangePicker,
} from '@ant-design/pro-components';
import { Button, message, Radio, Form } from 'antd';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './index.less';
import moment from 'moment';

const Form2 = () => {
  // const formRef = useRef<ProFormInstance>();
  const [formLayout, setFormLayout] = useState<'horizontal' | 'vertical' | 'inline'>('horizontal');
  const [submitterType, setSubmitterType] = useState<'default' | 'false' | 'custom'>('default');
  const [submitterDom, setSubmitterDom] = useState<
    | false
    | SubmitterProps<{
        form?: FormInstance<any>;
      }>
    | undefined
  >(undefined);

  // 性别选项
  const sexOptions = [
    { label: '男生', value: 'man' },
    { label: '女生', value: 'woman' },
  ];
  // 性别/课程选项
  const optionObj: Record<string, { label: string; value: string }[]> = {
    man: [
      {
        label: 'IT',
        value: 'IT',
      },
      {
        label: '运营',
        value: 'CS',
      },
      {
        label: '设计',
        value: 'UI',
      },
    ],
    woman: [
      {
        label: '教师',
        value: 'teacher',
      },
      {
        label: '护士',
        value: 'nurse',
      },
      {
        label: '会计',
        value: 'accounting',
      },
    ],
  };

  // 模拟数据
  const initialState = () => {
    form.setFieldsValue({
      address: '重庆市xxx区xxx路xxx号',
      admissionDate: '2024-11-23',
      cost: 24000,
      name: '张三',
      sex: 'man',
      studyTime: ['2024-11-23', '2026-11-23'],
      subject: 'UI',
      year: '2',
    });
  };

  // 自定义操作栏
  const submitterCustom: SubmitterProps<{
    form?: FormInstance<any>;
  }> = {
    render: (props, doms) => {
      return [
        // ...doms,  // 默认的提交按钮
        <Button type="default" key="clear" onClick={() => props.form?.resetFields()}>
          清空
        </Button>,
        <Button type="primary" key="init" onClick={initialState}>
          默认值
        </Button>,
        // props.form?.submit?.() 触发ProForm的onFinish
        <Button type="primary" key="save" onClick={() => props.form?.submit?.()}>
          保存
        </Button>,
      ];
    },
  };

  // 自定义操作栏按钮
  const handleSubmitter = (val: 'default' | 'false' | 'custom') => {
    setSubmitterType(val);
    switch (val) {
      case 'false':
        setSubmitterDom(false);
        break;
      case 'custom':
        setSubmitterDom(submitterCustom);
        break;
      default:
        setSubmitterDom(undefined);
        break;
    }
  };

  // 获取表单实例
  const [form] = Form.useForm(); // 等同于 formRef.current
  // 动态表单值
  const yearVal = Form.useWatch('year', form);
  const admissionDateVal = Form.useWatch('admissionDate', form);

  // 根据就读年制和入校日期计算就读时间
  useEffect(() => {
    if (!yearVal || !admissionDateVal) return;
    const startTime = admissionDateVal.format('YYYY-MM-DD');
    const endTime = moment(startTime).add(yearVal, 'year');
    form.setFieldValue('studyTime', [startTime, endTime]);
  }, [yearVal, admissionDateVal]);

  // 提交
  const onFinish = async (formData: any) => {
    try {
      console.log('formData :>> ', formData);
      await form.validateFields();
    } catch (error) {
      message.error('表单校验失败');
    }
  };

  // 重置表单
  const onReset = () => {
    form.resetFields();
  };

  // 性别选择
  const changeSex = (val: string) => {
    form.setFieldValue('subject', '');
    form.validateFields(['subject']);
  };

  // 年制选择
  const changeYear = (e: any) => {
    if (!e.target.value) return;
    form.setFieldValue('cost', e.target.value * 12000);
    form.validateFields(['cost']);
  };

  // 科目课程校验
  const subjectValidator = (rule: any, value: any, callback: any) => {
    if (!form.getFieldValue('sex')) {
      return Promise.reject('请先选择性别');
    }
    if (!value) {
      return Promise.reject('请选择科目');
    }
    return Promise.resolve();
  };

  // 就读费用校验
  const costValidator = (rule: any, value: any, callback: any) => {
    if (!form.getFieldValue('year')) {
      return Promise.reject('请先选择就读年制');
    }
    return Promise.resolve();
  };

  return (
    <div className={cn('flex-1', 'flex', 'column', 'container', 'scroll_thin')}>
      <Radio.Group
        style={{ marginBottom: 24 }}
        value={formLayout}
        onChange={(e) => setFormLayout(e.target.value)}
      >
        <Radio.Button value="horizontal">水平排布</Radio.Button>
        <Radio.Button value="vertical">垂直排布</Radio.Button>
        <Radio.Button value="inline">行内排布</Radio.Button>
      </Radio.Group>
      <Radio.Group
        style={{ marginBottom: 24 }}
        value={submitterType}
        onChange={(e) => handleSubmitter(e.target.value)}
      >
        <Radio.Button value={'default'}>默认操作栏</Radio.Button>
        <Radio.Button value={'false'}>无操作按钮</Radio.Button>
        <Radio.Button value={'custom'}>自定义操作栏</Radio.Button>
      </Radio.Group>

      <ProForm
        title="表单"
        form={form}
        layout={formLayout}
        submitter={submitterDom}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        className={cn('flex', 'form')}
        onFinish={onFinish}
        onReset={onReset}
      >
        <ProFormText
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          rules={[{ required: true, message: '请输入姓名' }]}
        />
        <ProFormText name="address" label="地址" placeholder="请输入地址" />
        <ProFormSelect
          name="sex"
          label="性别"
          placeholder="请选择性别"
          options={sexOptions}
          onChange={changeSex}
          rules={[{ required: true, message: '请选择性别' }]}
        />
        <ProFormDependency name={['sex']}>
          {({ sex }) => {
            return (
              <ProFormSelect
                options={optionObj[sex] || []}
                name="subject"
                label={`${sexOptions.find((e) => e.value === sex)?.label || ''}科目`}
                rules={[{ required: true, validator: subjectValidator }]}
              />
            );
          }}
        </ProFormDependency>
        <ProFormRadio.Group
          name="year"
          label="就读年制"
          options={[
            {
              label: '1年制',
              value: '1',
            },
            {
              label: '2年制',
              value: '2',
            },
            {
              label: '3年制',
              value: '3',
            },
          ]}
          rules={[{ required: true, message: '请选择就读年制' }]}
          fieldProps={{
            onChange: changeYear,
          }}
        />
        <ProFormDigit
          label="就读费用"
          name="cost"
          readonly
          rules={[{ required: true, validator: costValidator }]}
        />
        <ProFormDatePicker name="admissionDate" label="入校日期" />
        <ProFormDateRangePicker name="studyTime" label="就读时间" />
      </ProForm>
    </div>
  );
};

export default Form2;
