import { history } from 'umi';
import { Menu } from 'antd';
import menuList from './menu.js';

const { SubMenu } = Menu;

interface MenuItem {
  key: string;
  label: string;
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
      <SubMenu key={item.key} title={item.label}>
        {item.children &&
          item.children.map((cItem: MenuItem) => {
            if (!cItem.children) {
              return (
                <Menu.Item key={cItem.key} onClick={() => menuClick(cItem.src)}>
                  {cItem.label}
                </Menu.Item>
              );
            } else {
              return (
                // MySubMenu 这里如果按组件使用会导致没有key
                // <MySubMenu key={cItem.key} item={cItem}></MySubMenu>
                MySubMenu({ item: cItem })
              );
            }
          })}
      </SubMenu>
    );
  };

  return (
    <div
      className="scroll_thin"
      style={{ width: fullFalg ? 0 : 260, height: '100%', overflowY: 'auto', flexShrink: 0 }}
    >
      <Menu
        mode="inline"
        style={{
          width: fullFalg ? 0 : 256,
          // height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          transition: 'width .2s',
        }}
        items={menuList} // ant design 4.20版本后才支持
      >
        {/* 低版本用这个逻辑 */}
        {/* {menuList.map(
          (item: MenuItem) => MySubMenu({ item }),
          // MySubMenu 这里如果按组件使用会导致没有key
          // (item: MenuItem) => {
          //   return (
          //     <MySubMenu key={item.id} item={item}></MySubMenu>
          //   );
          // }
        )} */}
      </Menu>
    </div>
  );
};
export default MyMenu;
