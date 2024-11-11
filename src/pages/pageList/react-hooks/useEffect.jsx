import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Button, Divider } from 'antd';
/**
 * useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途。
 * 执行 DOM 更新(包括首次渲染)之后调用 effect
 */

const UseEffectDom1 = () => {
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
      <p>{a}</p>
      <Button
        onClick={() => {
          setA(a + 1);
        }}
      >
        a+1
      </Button>
    </div>
  );
};

const UseEffectDom2 = () => {
  const [a, setA] = useState(0);
  // let b = 0;
  const [b, setB] = useState(0);
  const [c, setC] = useState('');
  const [d, setD] = useState('');

  // 由于仅依赖a，所以a改变，会触发useEffect，给c赋值最新a值
  // 但是b改变，不会触发useEffect，因为b没有在依赖列表中
  // 如果b是可响应数据，useEffect会获取最新的b值，如果b是不可响应数据，则不会获取最新数据
  useEffect(() => {
    console.log('useEffect 1');
    setC(`${a}&${b}`);
  }, [a]);

  // 无依赖项，每次渲染都会触发
  useEffect(() => {
    console.log('useEffect 2');
    setD(`111`); // 此次修改也会触发 useEffect 2
  });

  const handleA = () => {
    setA(a + 1);
  };
  const handleB = () => {
    // b += 1;
    setB(b + 1);
  };
  const handleC = () => {
    setD(`222`); // 此次修改会触发 useEffect 2，所以d最终会是 111
  };

  return (
    <div>
      <p>a & b: {c}</p>
      <p>d: {d}</p>
      <Button onClick={handleA}>a+1</Button>
      <Button onClick={handleB}>b+1</Button>
      <Button onClick={handleC}>change d</Button>
    </div>
  );
};

const UseEffectDom = () => {
  return (
    <div className={cn('flex-1')}>
      <UseEffectDom1 />
      <Divider />
      <UseEffectDom2 />
      <Divider />
    </div>
  );
};

export default UseEffectDom;
