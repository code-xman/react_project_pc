import { history } from 'umi';
import { Menu } from 'antd';
import { menuList } from './menu.js';

const { SubMenu } = Menu;

interface MenuItem {
  id: string;
  name: string;
  src?: string;
  children?: MenuItem[];
}

interface MyMenuProps {
  fullFalg: boolean;
}

const MyMenu = (props: MyMenuProps) => {
  const { fullFalg } = props;
  const menuClick = (src?: string) => {
    src && history.push(src);
  };

  // 递归处理菜单
  const MySubMenu = (props: { item: MenuItem }) => {
    const { item } = props;
    return (
      <SubMenu key={item.id} title={item.name}>
        {item.children &&
          item.children.map((cItem: MenuItem) => {
            if (!cItem.children) {
              return (
                <Menu.Item key={cItem.id} onClick={() => menuClick(cItem.src)}>
                  {cItem.name}
                </Menu.Item>
              );
            } else {
              return (
                // MySubMenu 这里如果按组件使用会导致没有key
                // <MySubMenu key={cItem.id} item={cItem}></MySubMenu>
                MySubMenu({ item: cItem })
              );
            }
          })}
      </SubMenu>
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <Menu
        mode="inline"
        style={{
          width: fullFalg ? 0 : 256,
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          transition: 'width .2s',
        }}
      >
        {menuList.map(
          (item: MenuItem) => MySubMenu({ item }),
          // MySubMenu 这里如果按组件使用会导致没有key
          // (item: MenuItem) => {
          //   return (
          //     <MySubMenu key={item.id} item={item}></MySubMenu>
          //   );
          // }
        )}
      </Menu>
    </div>
  );
};
export default MyMenu;
