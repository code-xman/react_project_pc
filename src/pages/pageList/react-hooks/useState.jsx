import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Button } from 'antd';
/**
 * 类似 class 组件的 this.setState
 * useState 会返回一对值：当前状态和一个让你更新它的函数
 */

const UseStateDome = () => {
  // 初始化可以使用函数，此函数只在初始渲染时被调用
  const [a, setA] = useState(() => 0);
  const [b, setB] = useState({
    name: '',
    age: '',
  });

  const handleB = () => {
    setA(() => -1);
    setB(() => {
      return {
        name: 'aaa',
        age: '1111',
      };
    });

    /**
     * 在Hooks中，React并不知道我们调用了几次useState，
     * 所以React通过将一个Hook对象挂载在memorizedStated上来保存函数组件的state。
     * react会在后头一起更新，所以像console这样打印出来的数据还是之前的数据
     */
    console.log('a :>> ', a);
    console.log('b :>> ', b);
  };

  return (
    <div className={cn('flex-1')}>
      <Button style={{ marginRight: '10px' }} onClick={() => setA(0)}>
        归零
      </Button>

      <Button
        style={{ marginRight: '10px' }}
        type="primary"
        onClick={() => setA(a + 1)}
      >
        点击+1
      </Button>

      <Button
        style={{ marginRight: '10px' }}
        type="primary"
        onClick={() => setA((prevA) => prevA + 2)}
      >
        点击+2
      </Button>

      <p>{a}</p>

      <Button style={{ marginRight: '10px' }} type="primary" onClick={handleB}>
        handleB
      </Button>
      <p>{b.name ? `${b.name}-${b.age}` : 'b'}</p>
    </div>
  );
};

export default UseStateDome;
