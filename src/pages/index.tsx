import './css/common.less';
import './index.less';
import MyMenu from '@/pages/menu/myMenu';
import cn from 'classnames';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className={cn('ys-layout')}>
      <h1 className={cn('top-title')}>YS Demo</h1>
      <div className={cn('container')}>
        <MyMenu></MyMenu>
        <div className={cn('page-box', 'box-border', 'flex')}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
