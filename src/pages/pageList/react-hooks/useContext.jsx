import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import Son from './components/useContextSon';

const mythemes = {
  foreground: '#000000',
  background: '#eeeeee',
};

// Context 为上下文；可以将父组件的数据传递给子级，且中间组件可以不用进行传递
export const myContext = React.createContext({});

const Child = () => {
  return (
    <div>
      <Son></Son>
    </div>
  );
};

const UseContextDom = () => {
  const [themes, setthemes] = useState(mythemes);
  const contextVal = {
    themes,
    setthemes,
  };
  const onClick = () => {
    setthemes(mythemes);
  };
  return (
    <div className="flex-1">
      {/* 需要传递的数据写入 <XXXXXX.Provider> 的value属性中，可以传入变量和方法 */}
      <myContext.Provider value={contextVal}>
        <Child></Child>
      </myContext.Provider>
      <Button className="mg-5" onClick={onClick}>
        父组件重置主题
      </Button>
    </div>
  );
};

export default UseContextDom;
