import React, { useEffect, useRef, useState } from 'react';
import { Popover, Avatar, Button } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import cn from 'classnames';
import './index.less';

export interface FabProps {
  fullFalg: boolean;
  setFullFalg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fab = (props: FabProps) => {
  // 是否全屏
  const { fullFalg, setFullFalg } = props;
  // pop的visible
  const [popVisible, setPopVisible] = useState(false);
  // 出现 or 躲藏
  const [showFab, setShowFab] = useState(true);
  // pop的content
  const content = () => {
    const fullClick = () => {
      setFullFalg(!fullFalg);
    };
    const githubClick = () => {
      window.open('https://github.com/code-xman/react_project_pc');
    };
    const hideClick = () => {
      setShowFab(false);
      setPopVisible(false);
    };
    return (
      <div className={cn('flex', 'column', 'fab-content')}>
        <Button type="text" size="small" onClick={fullClick}>
          {fullFalg ? '退出全屏' : '全屏'}
        </Button>
        <Button type="text" size="small" onClick={githubClick}>
          github
        </Button>
        <Button type="text" size="small" onClick={hideClick}>
          躲起来
        </Button>
      </div>
    );
  };
  const handleHoverChange = (visible: boolean) => {
    if (showFab) {
      // 出现后使用原生hover的visible
      setPopVisible(visible);
    } else {
      // 躲藏后hover无效
      setPopVisible(false);
    }
  };
  return (
    <div
      style={{ right: showFab ? 35 : -20 }}
      className={cn('fab-avatar')}
      onClick={() => !showFab && setShowFab(true)}
    >
      <Popover
        content={content}
        visible={popVisible}
        trigger={['hover']}
        onVisibleChange={handleHoverChange}
      >
        <Avatar icon={<AntDesignOutlined />} />
      </Popover>
    </div>
  );
};

export default Fab;
