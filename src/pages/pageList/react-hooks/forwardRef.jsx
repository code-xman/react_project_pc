import React, {
  forwardRef,
  useCallback,
  useRef,
  useEffect,
  useState,
} from 'react';
import { Button } from 'antd';

const BtnA = (props, ref) => {
  const onClick = () => {
    console.log('click BtnA');
  };
  return (
    <Button ref={ref} onClick={onClick}>
      Btn-A
    </Button>
  );
};

// forwardRef 可以将接受的ref传给参数里的组件；这样 外层调用的ref 就是 参数里的组件的ref
const BtnForwardRef = forwardRef(BtnA);

const TestForwardRef = () => {
  const ref = useRef();
  const onclick = useCallback(() => ref.current?.click?.(), [ref.current]);
  return (
    <div>
      <BtnForwardRef ref={ref} />
      <div>父级组件,使用BtnA的点击事件的按钮</div>
      <Button onClick={onclick}>copy Btn-A</Button>
    </div>
  );
};

export default TestForwardRef;
