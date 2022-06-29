import React from 'react';
import { Button } from 'antd';
/**
 * 对于一处于pending状态的Promise对象p，内部状态的resolve，会让p.then(fn)中的fn加入微任务队列
 * 对于Promise我们需要知道，链式调用.then之后会返回一个新的Promise对象。
 * 对于一处于fulfilled状态的Promise对象p，p.then(fn)会立即让fn加入微任务队列
 */

/**
 * a
 * 没有reslove的Promise，处于pending状态，Promise代码执行完成后状态为fulfilled状态，
 * 后面的.then(fn())会被执行，且是在当前的loop执行，但是.then(fn)不会被执行
 * 打印结果： 
    a
    then 2
    then 3
    first loop end
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
 * 打印结果： 
    a
    then 2
    then 3
    first loop end
    (cFn: setTimeout 1000 :>> )
    then 1
    then 4
 */
const bFn = () => {
  const a = new Promise((reslove, reject) => {
    console.log('a');
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
    console.log('a');
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
/**
 * 运行到 a，打印a，并且reslove；将 then 1 加入到微任务；
 * then 2 不是个回调函数，是一个函数的调用，且调用后返回值不是个函数，也就没有东西会被push到微队列里，会直接打印 then 2
 * 此时 a 还是pending状态，所以 then 3 还没有到微任务中；
 * 而 then 4 和 then 2 一样，所以会直接打印 then 4；
 * 然后运行到 b，b和a情况一样，所以会依次打印 b--then 22--then 44；此过程中 then 11 加入到微任务；
 * 然后 first loop end；
 * 系统开始处理微任务 发现有 then 1 和 then 11；于是依次打印 then 1 和 then 11；
 * then 1 和 then 11结束后，Promise a 和 Promise b 运行结束，状态改为fulfilled；
 * 于是导致 then 3 和 then 33 进入微任务；
 * 最后依次打印 then 3 和 then 33；
 * 结果:
  a
  then 2
  then 4
  b
  then 22
  then 44
  first loop end
  then 1
  then 11
  then 3
  then 33
 */
const dFn = () => {
  const a = new Promise((reslove, reject) => {
    console.log('a');
    reslove();
  })
    .then((res) => {
      console.log('then 1');
    })
    .then(console.log('then 2'));

  a.then((res) => {
    console.log('then 3');
  }).then(console.log('then 4'));

  const b = new Promise((reslove, reject) => {
    console.log('b');
    reslove();
  })
    .then((res) => {
      console.log('then 11');
    })
    .then(console.log('then 22'));

  b.then((res) => {
    console.log('then 33');
  }).then(console.log('then 44'));

  console.log('first loop end');
};

const PromiseDom = () => {
  return (
    <div>
      <Button onClick={aFn}>执行 A</Button>
      <Button onClick={bFn}>执行 B</Button>
      <Button onClick={cFn}>执行 C</Button>
      <Button onClick={dFn}>执行 D</Button>
    </div>
  );
};

export default PromiseDom;
