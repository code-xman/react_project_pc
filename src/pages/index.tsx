import './css/common.less'
import './index.less';
import MyMenu from '@/pages/home/myMenu'
import cn from 'classnames';

export default (props:any) => {
  return (
    <div className={cn('ys-layout')}>
      <h1 className={cn('top-title')}>YS Demo</h1>
      <div className={cn('container')} >
        <MyMenu></MyMenu>
        <div className={cn('page-box', 'box-border')}>
          { props.children }
        </div>
      </div>
    </div>
  );
}
