import React from 'react';
import { Button } from 'antd';

const Precompile = () => {
  /**
   * 由于js的预编译的缘故，var a；和 function a；的声明会提升；
   * 函数声明 会比 变量声明 优先级更高；
   * 所以，aFn的执行情况是：
      function a () {}; 
      var a;                    // 此处的声明，会发现a已经声明，所以a还是为 ƒ (){}
      console.log('a :>> ', a); // a :>>  ƒ (){}
      a = 1;
      console.log('a :>> ', a); // a :>>  1
                                // 此处的函数声明被提前
      console.log('a :>> ', a); // a :>>  1
   */
  const aFn = () => {
    console.log('a :>> ', a); // a :>>  ƒ (){}
    var a = 1;
    console.log('a :>> ', a); // a :>>  1
    function a() {}
    console.log('a :>> ', a); // a :>>  1
  };
  return (
    <div>
      <Button onClick={aFn}>执行 A</Button>
    </div>
  );
};

export default Precompile;
