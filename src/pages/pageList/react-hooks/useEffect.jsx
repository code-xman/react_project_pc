import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Button } from 'antd';
/**
 * useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途。
 * 执行 DOM 更新(包括首次渲染)之后调用 effect
 */

const UseEffectDom = () => {
  const [a, setA] = useState(0);

  // 打印顺序 1-3-5-2-4-setTimeout
  // 调用setA改变a值，打印顺序 1-3-5-4，第一个useEffect的监听依赖没有a，所以不会触发
  console.log('1');

  useEffect(() => {
    console.log('2');
    const setTimeout1 = setTimeout(() => {
      console.log('setTimeout');
    }, 0);
    // 可return一个清除函数 组件卸载时会清除 effect 创建的诸如订阅或计时器 ID 等资源
    return () => {
      console.log('清除setTimeout');
      clearTimeout(setTimeout1);
    };
  }, []);

  console.log('3');

  useEffect(() => {
    console.log('4');
  }, [a]);

  console.log('5');

  // useEffect没有第二个参数，表明每次更新后都会触发该useEffect
  useEffect(() => {
    console.log('触发useEffect');
  });

  return (
    <div className={cn('flex-1')}>
      <Button
        onClick={() => {
          setA(a + 1);
        }}
      >
        a+1
      </Button>
      {a}
    </div>
  );
};

export default UseEffectDom;
