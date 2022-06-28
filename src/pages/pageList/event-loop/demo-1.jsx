import React from 'react';
import { Button } from 'antd';

/**
 * a
 * 没有reslove的Promise，处于pending状态，
 * 后面的.then(fn())会被执行，且是在当前的loop执行，但是.then(fn)不会被执行
 */
const aFn = () => {
  const a = new Promise((reslove, reject) => {
    console.log('a');
  })
    .then((res) => {
      console.log('then 1');
    })
    .then(console.log('then 2'));

  a.then(console.log('then 3')).then((res) => {
    console.log('then 4');
  });

  console.log('first loop end');
};
/**
 * b & c
 * Promise的reslove，修改Promise状态为fulfilled状态，
 * 后面的.then(fn())会被执行，且是在当前的loop执行，
 * .then(fn)也会被加入微任务，当前loop执行完后，再按序执行
 */
const bFn = () => {
  const a = new Promise((reslove, reject) => {
    console.log('b');
    reslove();
  })
    .then((res) => {
      console.log('then 1');
    })
    .then(console.log('then 2'));

  a.then(console.log('then 3')).then((res) => {
    console.log('then 4');
  });

  console.log('first loop end');
};
const cFn = () => {
  const a = new Promise((reslove, reject) => {
    console.log('c');
    setTimeout(() => {
      console.log('setTimeout 1000 :>> ');
      reslove();
    }, 1000);
  })
    .then((res) => {
      console.log('then 1');
    })
    .then(console.log('then 2'));

  a.then(console.log('then 3')).then((res) => {
    console.log('then 4');
  });

  console.log('first loop end');
};

const PromiseDom = () => {
  return (
    <div>
      <Button onClick={aFn}>执行 A</Button>
      <Button onClick={bFn}>执行 B</Button>
      <Button onClick={cFn}>执行 C</Button>
    </div>
  );
};

export default PromiseDom;
