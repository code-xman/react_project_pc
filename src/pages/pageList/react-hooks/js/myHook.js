import { useEffect, useState } from 'react';

export const personList = [
  {
    id: 'X001',
    name: '法外狂徒 张三',
  },
  {
    id: 'X002',
    name: '法外狂徒 格雷福斯',
  },
];

/**
 * 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
 * 自定义 Hook 就像一个正常的函数。但是它的名字应该始终以 use 开头
 * 通过自定义 Hook, 可简化不同组件的重复逻辑
 * 在两个组件中使用相同的 Hook 不会共享 state，它们是完全独立的
 */
export const useOnlineHook = (id) => {
  const personList = [
    {
      id: 'X001',
      isOnline: true,
    },
    {
      id: 'X002',
      isOnline: false,
    },
  ];
  const [person, setPerson] = useState({});
  useEffect(() => {
    const personObj = personList.find((item) => item.id === id);
    setPerson(personObj);
  }, [id]);
  return person;
};
