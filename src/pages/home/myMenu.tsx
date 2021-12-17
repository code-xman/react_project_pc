import { history } from 'umi';
import { Menu } from 'antd';
import { menuList } from './menu.js'

const { SubMenu } = Menu;

const MyMenu = () => {
  const menuClick = (src:string) => {
    history.push(src)
  }


  return (
    <div style={{height: '100%'}}>

      <Menu mode="inline" style={{ width: 256, height: '100%', overflowY: 'auto', overflowX: 'hidden', }} >
        {
          menuList.map( (item:{id: string,name: string, children?:any}) => {
            // console.log('item :>> ', item);
            return (
              <SubMenu key={item.id} title={item.name}>
                {
                  item.children && item.children.map((cItem:{id: string,name: string, src:string}) => {
                    // console.log('cItem :>> ', cItem);
                    return (
                      <Menu.Item key={cItem.id} onClick={()=>menuClick(cItem.src)}>{cItem.name}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
      
    </div>
  )
}
export default MyMenu