export const menuList = [
  {
    name: 'test',
    id: 'test',
    children: [
      {
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
        name: 'TableA',
        id: 'TableA',
        src: '/table-a/index',
      },
    ]
  },
] 

const aaa = 1
export default { menuList, aaa }