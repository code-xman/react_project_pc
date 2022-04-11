import React, { useState, useCallback, useRef } from 'react';
import cn from 'classnames';
import { Button, Input, Select, Radio, Checkbox } from 'antd';

import './index.less';

const { Option } = Select;

const FormA = () => {
  const [formItemList, setFormItemList] = useState([]);
  const formParams = useRef({
    activeItem: '',
  });

  const LPart = (props) => {
    const btnList = [
      {
        name: 'input',
        text: '输入框',
      },
      {
        name: 'select',
        text: '选择框',
        options: [
          {
            value: '111',
            text: '1111',
          },
          {
            value: '222',
            text: '2222',
          },
        ],
      },
      {
        name: 'checkout',
        text: '多选框',
        options: [
          {
            value: '111',
            text: '1111',
          },
          {
            value: '222',
            text: '2222',
          },
        ],
      },
      {
        name: 'radio',
        text: '单选框',
        options: [
          {
            value: '111',
            text: '1111',
          },
          {
            value: '222',
            text: '2222',
          },
        ],
      },
    ];
    return (
      <div className={props.className}>
        {btnList.map((btn) => {
          return (
            <Button
              key={btn.name}
              type={btn.type ? btn.type : 'primary'}
              className={cn('l-btn')}
              onClick={() => setFormItemList([...formItemList, btn])}
            >
              {btn.text}
            </Button>
          );
        })}
      </div>
    );
  };

  const CPart = (props) => {
    return (
      <div className={props.className}>
        {formItemList.map((formItem, index) => {
          let formItemEle = '暂无内容';
          if (formItem.name === 'input') {
            formItemEle = <Input className={cn('flex-1')} />;
          } else if (formItem.name === 'select') {
            formItemEle = (
              <Select className={cn('flex-1')} showSearch>
                {formItem.options.map((option) => {
                  return (
                    <Option value={option.value} key={option.value}>
                      {option.text}
                    </Option>
                  );
                })}
              </Select>
            );
          } else if (formItem.name === 'checkout') {
            formItemEle = (
              <Checkbox.Group className={cn('flex-1')}>
                {formItem.options.map((option) => {
                  return (
                    <Checkbox value={option.value} key={option.value}>
                      {option.text}
                    </Checkbox>
                  );
                })}
              </Checkbox.Group>
            );
          } else if (formItem.name === 'radio') {
            formItemEle = (
              <Radio.Group buttonStyle="solid" className={cn('flex-1')}>
                {formItem.options.map((option) => {
                  return (
                    <Radio.Button value={option.value} key={option.value}>
                      {option.text}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            );
          }

          return (
            <div
              key={formItem.name + `${index}`}
              className={cn('flex', 'y-center', 'a-form-item', {
                'a-form-item-active':
                  formParams.current.activeItem === formItem.name,
              })}
              onClick={() => (formParams.current.activeItem = formItem.name)}
            >
              <span className={cn('form-item-label')}>{formItem.text}:</span>
              {formItemEle}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <LPart
        className={cn('flex-all', 'flex-wrap', 'box-border', 'l-part')}
      ></LPart>
      <CPart className={cn('flex-1', 'box-border', 'c-part')}></CPart>
      <div className={cn('r-part', 'box-border')}>3</div>
    </>
  );
};

export default FormA;
