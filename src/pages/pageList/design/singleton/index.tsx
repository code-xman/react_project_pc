import React from 'react';
import { TimeTool, timeTool } from './index';

const Singleton = () => {
  const myTimeTool = new TimeTool();
  return (
    <div>
      <p>{timeTool.name}</p>
      <p>{timeTool.version}</p>
      <p>{timeTool.formatDate?.(new Date())}</p>
      <p>{timeTool.foemmatDateTime?.(new Date())}</p>
      <p>myTimeTool === timeTool is {`${myTimeTool === timeTool}`}</p>
    </div>
  );
};

export default Singleton;
