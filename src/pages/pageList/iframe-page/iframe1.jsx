import React, { useEffect } from 'react';
import cn from 'classnames';
import './ifeameLess.less';

const IframeOne = () => {
  // 发送message
  const name = 'iframe1';
  const handleClick = () => {
    window.postMessage({ type: 'iframe1-click', value: { name } }, '*');
  };

  // 接收message
  const handlePostMessage = (event) => {
    if (event.data.type === 'iframe2-click') {
      console.log('event :>> ', event);
    }
  };
  useEffect(() => {
    window.addEventListener('message', handlePostMessage);
    return () => {
      window.removeEventListener('message', handlePostMessage);
    };
  });

  return (
    <div className={cn('flex-1', 'iframe-1')}>
      <h3>I'm IframeOne</h3>
      <h3 className={cn('h3')} onClick={handleClick}>
        Click me to send message to IframeTwo{' '}
      </h3>
      <iframe
        id="iframe1"
        className={cn('iframe-page')}
        src="http://192.168.0.247:8080/iframe-page/iframe2"
      ></iframe>
    </div>
  );
};

export default IframeOne;
