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
    label: 'pro-components',
    key: 'ProComponents',
    children: [
      {
        label: 'pro-table',
        key: 'ProTable',
        src: '/pageList/pro-components/pro-table',
      },
      {
        label: 'pro-form',
        key: 'ProForm',
        src: '/pageList/pro-components/pro-form',
      },
    ],
  },
  {
    label: '表单 Demo',
    key: 'form',
    children: [
      {
        label: '自定义表单',
        key: 'FormCustom',
        src: '/pageList/form-demo/form-custom',
      },
      {
        label: 'Form-1',
        key: 'Form-1',
        src: '/pageList/form-demo/form-1',
      },
    ],
  },
  {
    label: '表格 Demo',
    key: 'table',
    children: [
      {
        label: '粘性滚动表格',
        key: 'StickyScrollTable',
        src: '/pageList/table-demo/sticky-scroll-table',
      },
      {
        label: 'table-1',
        key: 'Table-1',
        src: '/pageList/table-demo/table-1',
      },
    ],
  },
  {
    label: '设计模式',
    key: 'design',
    children: [
      {
        label: '发布-订阅者模式',
        key: 'observer',
        src: '/pageList/design/observer/Observer',
      },
      {
        label: '单例模式',
        key: 'singleton',
        src: '/pageList/design/singleton',
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
      {
        label: 'My Func',
        key: 'myFunc',
        children: [
          {
            label: 'Editor Demo',
            key: 'Editor',
            src: '/pageList/func/my-func/editor',
          },
          {
            label: 'Dnd Demo',
            key: 'Dnd',
            src: '/pageList/func/my-func/dnd',
          },
          {
            label: 'React Player',
            key: 'reactPlayer',
            src: '/pageList/func/my-func/react-player',
          },
          {
            label: 'React Grid Layout',
            key: 'reactGridLayout',
            src: '/pageList/func/my-func/react-grid-layout',
          },
          {
            label: 'iframe1',
            key: 'iframe1',
            src: '/pageList/func/my-func/iframe-page/iframe1',
          },
          {
            label: '事件循环机制',
            key: 'EventLoop',
            src: '/pageList/func/my-func/event-loop',
          },
          {
            label: '变量提升',
            key: 'precompile',
            src: '/pageList/func/my-func/precompile',
          },
        ],
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
