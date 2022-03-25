import React, { useContext } from 'react';
import Son from './components/useContextSon';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const myContext = React.createContext({});

const Child = () => {
  return (
    <div>
      <Son></Son>
    </div>
  );
};

const UseContextDom = () => {
  return (
    <myContext.Provider value={themes.light}>
      <Child></Child>
    </myContext.Provider>
  );
};

export default UseContextDom;
