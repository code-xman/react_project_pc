import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button } from 'antd';
import { debounce } from 'lodash';

const Debounce = () => {
  const [state, setState] = useState(0);
  const ref = useRef({
    state: 0,
  });
  // 通过防抖控制的方法应该保持不变，会更新的方法则防抖无效
  const addOne = useCallback(() => {
    // 因为方法不能更新，所有只能通过ref获取最新的数据
    ref.current.state = ref.current.state + 1;
    // 去更新state，因为ref更新不会触发页面更新
    setState(ref.current.state);
  }, []);
  // debounceAddOne 也应当保持不变，否则btn绑定的方法更新后，防抖无效
  const debounceAddOne = useMemo(() => {
    return debounce(addOne, 1000);
  }, [addOne]);

  return (
    <div>
      {/* 绑定不更新的防抖方法 */}
      <Button onClick={debounceAddOne}>加一</Button>
      {/* 绑定会更新的数据 */}
      <p>{state}</p>
    </div>
  );
};

export default Debounce;
