import { history } from 'umi';

// 菜单数据
const menuData = [
  {
    label: 'test',
    key: 'test',
    children: [
      {
        label: 'test1',
        key: 'test1',
        src: '/pageList/page1',
      },
    ],
  },
  {
    label: 'react hooks',
    key: 'react-hooks',
    children: [
      {
        label: 'useState',
        key: 'useState',
        src: '/pageList/react-hooks/useState',
      },
      {
        label: 'useEffect',
        key: 'useEffect',
        src: '/pageList/react-hooks/useEffect',
      },
      {
        label: 'myHook',
        key: 'myHook',
        src: '/pageList/react-hooks/myHook',
      },
      {
        label: 'useContext',
        key: 'useContext',
        src: '/pageList/react-hooks/useContext',
      },
      {
        label: 'useReducer',
        key: 'useReducer',
        src: '/pageList/react-hooks/useReducer',
      },
      {
        label: 'CallbackMemo',
        key: 'CallbackMemo',
        src: '/pageList/react-hooks/CallbackMemo',
      },
      {
        label: 'forwardRef',
        key: 'forwardRef',
        src: '/pageList/react-hooks/forwardRef',
      },
      {
        label: 'useImperativeHandle',
        key: 'useImperativeHandle',
        src: '/pageList/react-hooks/useImperativeHandle',
      },
      {
        label: 'highComponent',
        key: 'highComponent',
        src: '/pageList/react-hooks/highComponent',
      },
    ],
  },
  {
    label: '表单 Demo',
    key: 'form',
    children: [
      {
        label: 'FormCustom',
        key: 'FormCustom',
        src: '/pageList/form-demo/form-custom',
      },
      {
        label: 'Form-1',
        key: 'Form-1',
        src: '/pageList/form-demo/form-1',
      },
      {
        label: 'Form-2',
        key: 'Form-2',
        src: '/pageList/form-demo/form-2',
      },
    ],
  },
  {
    label: '表格 Demo',
    key: 'table',
    children: [
      {
        label: 'StickyScrollTable',
        key: 'StickyScrollTable',
        src: '/pageList/sticky-scroll-table',
      },
      {
        label: 'table1',
        key: 'table1',
        src: '/pageList/table1',
      },
    ],
  },
  {
    label: 'Editor Demo',
    key: 'Editor',
    children: [
      {
        label: 'Editor',
        key: 'Editor1',
        src: '/pageList/editor',
      },
    ],
  },
  {
    label: 'Dnd Demo',
    key: 'Dnd',
    children: [
      {
        label: 'Dnd',
        key: 'Dnd1',
        src: '/pageList/dnd',
      },
    ],
  },
  {
    label: 'func Demo',
    key: 'func',
    children: [
      {
        label: 'lodash',
        key: 'lodash',
        children: [
          {
            label: 'throttle',
            key: 'throttle',
            src: '/pageList/func/lodash/throttle',
          },
          {
            label: 'debounce',
            key: 'debounce',
            src: '/pageList/func/lodash/debounce',
          },
        ],
      },
    ],
  },
  {
    label: 'iframe Demo',
    key: 'iframe',
    children: [
      {
        label: 'iframe1',
        key: 'iframe1',
        src: '/pageList/iframe-page/iframe1',
      },
    ],
  },
  {
    label: 'TS Demo',
    key: 'TS',
    children: [
      {
        label: 'ts1',
        key: 'ts1',
        src: '/pageList/ts/ts-test1',
      },
    ],
  },
  {
    label: 'EventLoop Demo',
    key: 'EventLoop',
    children: [
      {
        label: 'EventLoop-1',
        key: 'EventLoop-1',
        src: '/pageList/event-loop/demo-1',
      },
    ],
  },
  {
    label: 'precompile Demo',
    key: 'precompile',
    children: [
      {
        label: 'precompile-1',
        key: 'precompile-1',
        src: '/pageList/precompile/demo-1',
      },
    ],
  },
];

// 处理菜单menu
const formatMenu = (menu) => {
  const { label, src } = menu;
  // 没有children，添加title、onclick
  if (!menu.children) {
    return {
      title: label,
      onClick: () => src && history.push(src),
      ...menu,
    };
  }
  // 有children且为数组，递归处理
  if (Array.isArray(menu.children)) {
    menu.children = menu.children.map((item) => {
      return formatMenu(item);
    });
  }
  return menu;
};

const menuList = menuData.map((item) => {
  return formatMenu(item);
});

export default menuList;
