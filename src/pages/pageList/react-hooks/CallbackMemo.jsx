import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'antd';

/**
 * useCallback
 * useCallback 返回一个 memoized 回调函数,仅在某个依赖项改变时才会更新
 * 该回调函数仅在某个依赖项改变时才会更新
 */

const CallbackMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  // 第二个参数是监听的对象,[]代表不监听，x也就不会更新
  const x = useCallback(() => {
    console.log('x a :>> ', a);
  }, []);
  // 第二个参数是监听的对象，只有a改变后才会更新
  const y = useCallback(() => {
    console.log('y a :>> ', a);
  }, [a]);
  // 不写第二个参数等于监听所有改变
  const z = useCallback(() => {
    console.log('z a :>> ', a);
  });
  // m: b改变后才会更新
  const m = useCallback(() => {
    console.log('m a :>> ', a);
  }, [b]);

  // 打印顺序 2-3-1
  // 传入 useMemo 的函数会在渲染后执行
  useEffect(() => {
    console.log('1 :>> ', 1);
  }, [b]);
  // 传入 useMemo 的函数会在渲染期间执行
  const isOdd = useMemo(() => {
    console.log('2 :>> ', 2);
    return b % 2 === 1;
  }, [b]);
  console.log('3 :>> ', 3);
  return (
    <div>
      <Button onClick={x}>X Fn</Button>
      <Button onClick={y}>Y Fn</Button>
      <Button onClick={z}>Z Fn</Button>
      <Button onClick={m}>M Fn</Button>
      <Button onClick={() => setA(a + 1)}>change a</Button>
      <Button onClick={() => setB(b + 1)}>change b</Button>
      <div>
        a的值为{a},b的值为{b},b是{isOdd ? '奇数' : '偶数'}
      </div>
    </div>
  );
};

export default CallbackMemo;
