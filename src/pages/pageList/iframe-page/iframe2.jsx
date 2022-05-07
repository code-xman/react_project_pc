import React, { useEffect } from 'react';

const IframeTwo = () => {
  // 接收message
  const handlePostMessage = (event) => {
    if (event.data.type === 'iframe1-click') {
      console.log('event :>> ', event);
    }
  };
  useEffect(() => {
    window.top.addEventListener('message', handlePostMessage);
    return () => {
      window.top.removeEventListener('message', handlePostMessage);
    };
  });

  // 发送message
  const name = 'iframe2';
  const handleClick = () => {
    // iframe 需要用window.top
    window.top.postMessage({ type: 'iframe2-click', value: { name } }, '*');
  };

  return (
    <div style={{ width: '100vw' }}>
      <h3>I'm IframeTwo</h3>
      <h3 style={{ cursor: 'pointer' }} onClick={handleClick}>
        Click me to send message to IframeOne{' '}
      </h3>
    </div>
  );
};

export default IframeTwo;
