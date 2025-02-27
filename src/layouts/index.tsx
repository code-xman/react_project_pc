import '@/pages/css/common.less';
import './index.less';
import MyMenu from '@/pages/menu/myMenu';
import Fab, { FabProps } from '@/pages/pageList/fab';
import cn from 'classnames';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';

export default (props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) => {
  // 是否全屏
  const [fullFalg, setFullFalg] = useState(false);
  // 左侧菜单的attr
  const myMenuAttr = { fullFalg };
  // fab的attr
  const fabAttr: FabProps = { fullFalg, setFullFalg };
  return (
    <div className={cn('ys-layout')}>
      <h1 className={cn('layout-top-title')} style={{ height: fullFalg ? 0 : 40 }}>
        YS Demo
      </h1>
      <div
        className={cn('layout-container')}
        style={{ height: fullFalg ? 'calc(100% - 4px)' : 'calc(100% - 40px)' }}
      >
        <MyMenu {...myMenuAttr}></MyMenu>
        <div className={cn('layout-page-box', 'box-border', 'flex')}>{props.children}</div>
        <Fab {...fabAttr} />
      </div>
    </div>
  );
};
