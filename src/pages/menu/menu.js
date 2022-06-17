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
      {
        title: 'forwardRef',
        name: 'forwardRef',
        id: 'forwardRef',
        src: '/react-hooks/forwardRef',
      },
      {
        title: 'useImperativeHandle',
        name: 'useImperativeHandle',
        id: 'useImperativeHandle',
        src: '/react-hooks/useImperativeHandle',
      },
    ],
  },
  {
    name: '表单 Demo',
    id: 'form',
    children: [
      {
        title: '表格 custom',
        name: 'FormCustom',
        id: 'FormCustom',
        src: '/form-demo/form-custom',
      },
      {
        title: '表格 Base',
        name: 'FormBase',
        id: 'FormBase',
        src: '/form-demo/form-base',
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
  {
    name: 'Dnd Demo',
    id: 'Dnd',
    children: [
      {
        title: 'Dnd',
        name: 'Dnd',
        id: 'Dnd1',
        src: '/dnd/index',
      },
    ],
  },
  {
    name: 'func Demo',
    id: 'func',
    children: [
      {
        title: 'lodash',
        name: 'lodash',
        id: 'lodash',
        children: [
          {
            title: 'throttle',
            name: 'throttle',
            id: 'throttle',
            src: '/func/lodash/throttle',
          },
          {
            title: 'debounce',
            name: 'debounce',
            id: 'debounce',
            src: '/func/lodash/debounce',
          },
        ],
      },
    ],
  },
  {
    name: 'iframe Demo',
    id: 'iframe',
    children: [
      {
        title: 'iframe1',
        name: 'iframe1',
        id: 'iframe1',
        src: '/iframe-page/iframe1',
      },
    ],
  },
  {
    name: 'TS Demo',
    id: 'TS',
    children: [
      {
        title: 'ts1',
        name: 'ts1',
        id: 'ts1',
        src: '/ts/ts-test1',
      },
    ],
  },
];

export default { menuList };
