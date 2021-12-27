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
    ]
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
    ]
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
    ]
  },
] 

export default { menuList }