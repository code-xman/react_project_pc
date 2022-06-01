import React, { useContext } from 'react';
import { Button } from 'antd';
import { myContext } from '../useContext';

const Son = () => {
  const contextVal = useContext(myContext);
  const { themes, setthemes } = contextVal;
  const onClick = () => {
    setthemes({
      foreground: '#FFFFFF',
      background: '#111111',
    });
  };
  return (
    <>
      <div style={{ background: themes.background, color: themes.foreground }}>
        I am styled by theme context!
      </div>
      <Button className="mg-5" onClick={onClick}>
        子组件改变主题
      </Button>
    </>
  );
};

export default Son;
