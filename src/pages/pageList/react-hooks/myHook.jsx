import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { Select } from 'antd';

import './styles/myHook.less';
import { personList, useOnlineHook } from './js/myHook';

const OnlineIcon = (props) => {
  const { personId } = props;
  const personObj = useOnlineHook(personId);
  return (
    <div
      className={cn('onlineIcon', { online: !!personObj?.isOnline }, 'mr10')}
    ></div>
  );
};

const OnlineText = (props) => {
  const { personId } = props;
  const personObj = useOnlineHook(personId);
  const onlineText = personObj.isOnline ? '在线' : '离线';
  return <div className={cn('mr10')}>{onlineText}</div>;
};

const MyHook = () => {
  const [personId, setPersonId] = useState('');
  const options = useMemo(() => {
    const res = personList.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return res;
  }, [personList]);
  const personName = useMemo(() => {
    const res = personList.find((item) => item.id === personId)?.name || '';
    return res;
  }, [personId, personList]);

  return (
    <div className={cn('flex-1', 'my-hook')}>
      <Select
        className="select"
        options={options}
        onChange={(value) => {
          setPersonId(value);
        }}
      ></Select>
      {personId && (
        <div className={cn('flex', 'y-center', 'content')}>
          <div className="mr10">{personName}</div>
          <OnlineIcon personId={personId} />
          <OnlineText personId={personId} />
        </div>
      )}
    </div>
  );
};

export default MyHook;
