import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Button } from 'antd';

const MyButton = (props, ref) => {
  const btnRef = useRef();
  const onClick = () => {
    console.log('click BtnA');
  };
  // useImperativeHandle会将第二个参数的实例值暴露给父组件
  useImperativeHandle(ref, () => ({
    // 此处的click为ref.current.click
    click: () => {
      btnRef.current?.click();
    },
  }));
  return (
    <Button ref={btnRef} onClick={onClick}>
      MyButton
    </Button>
  );
};

const MyImperativeHandle = forwardRef(MyButton);

const TestImperativeHandle = () => {
  const ref = useRef();
  const onClick = useCallback(() => {
    ref.current?.click();
  }, [ref.current]);
  return (
    <div>
      <MyImperativeHandle ref={ref}></MyImperativeHandle>
      <Button onClick={onClick}>TestImperativeHandle</Button>
    </div>
  );
};

export default TestImperativeHandle;
