import React, {
  forwardRef,
  useCallback,
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
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

const BtnB = forwardRef((props, ref) => {
  const onclick = () => {
    console.log('click BtnB');
  };

  useImperativeHandle(ref, () => {
    return {
      onclick: onclick,
      doOthers: () => {
        console.log('doOthers');
      },
    };
  });

  return <Button onClick={onclick}>Btn-B</Button>;
});

const TestForwardRef = () => {
  const ref = useRef();
  const bRef = useRef();

  const onclick = useCallback(() => ref.current?.click?.(), [ref.current]);

  const handleB = () => {
    bRef.current?.onclick?.();
    bRef.current?.doOthers?.();
  };
  return (
    <div>
      <p>父级组件,使用BtnA的点击事件的按钮</p>
      <BtnForwardRef ref={ref} />
      <Button onClick={onclick}>触发Btn-A的click</Button>
      <p>使用useImperativeHandle自定义事件</p>
      <BtnB ref={bRef} />
      <Button onClick={handleB}>触发Btn-B的onclick和doOthers</Button>
    </div>
  );
};

export default TestForwardRef;
