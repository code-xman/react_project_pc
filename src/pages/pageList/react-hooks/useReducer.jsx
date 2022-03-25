import React, { useReducer } from 'react';
import { Button } from 'antd';

const UseReducerDom = () => {
  const reducer = (state, action) => {
    switch (action) {
      case 'add':
        return { count: state.count + 1 };

      case 'sub':
        return { count: state.count - 1 };

      default:
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <Button onClick={() => dispatch('add')}>+1</Button>
      <Button onClick={() => dispatch('sub')}>-1</Button>
      <div>{state?.count}</div>
    </div>
  );
};

export default UseReducerDom;
