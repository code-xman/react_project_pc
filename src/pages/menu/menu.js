export const menuList = [
  {
    name: 'test',
    id: 'test',
    children: [
      {
        title: '测试 1',
        name: 'test1',
        id: 'test1',
        src: '/page1',
      },
    ],
  },
  {
    name: 'react hooks',
    id: 'react-hooks',
    children: [
      {
        title: 'useState',
        name: 'useState',
        id: 'useState',
        src: '/react-hooks/useState',
      },
      {
        title: 'useEffect',
        name: 'useEffect',
        id: 'useEffect',
        src: '/react-hooks/useEffect',
      },
      {
        title: 'myHook',
        name: 'myHook',
        id: 'myHook',
        src: '/react-hooks/myHook',
      },
      {
        title: 'useContext',
        name: 'useContext',
        id: 'useContext',
        src: '/react-hooks/useContext',
      },
      {
        title: 'useReducer',
        name: 'useReducer',
        id: 'useReducer',
        src: '/react-hooks/useReducer',
      },
      {
        title: 'CallbackMemo',
        name: 'CallbackMemo',
        id: 'CallbackMemo',
        src: '/react-hooks/CallbackMemo',
      },
    ],
  },
  {
    name: '表单 Demo',
    id: 'form',
    children: [
      {
        title: '表格 A',
        name: 'FormA',
        id: 'FormA',
        src: '/form-a/index',
      },
    ],
  },
  {
    name: '表格 Demo',
    id: 'table',
    children: [
      {
        title: '粘滞滚动条表格',
        name: 'StickyScrollTable',
        id: 'StickyScrollTable',
        src: '/sticky-scroll-table/index',
      },
    ],
  },
  {
    name: 'Editor Demo',
    id: 'Editor',
    children: [
      {
        title: 'Editor',
        name: 'Editor',
        id: 'Editor1',
        src: '/editor/index',
      },
    ],
  },
];

export default { menuList };
