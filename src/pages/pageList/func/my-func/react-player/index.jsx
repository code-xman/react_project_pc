import cn from 'classnames';
import ReactPlayer from 'react-player';

const ReactPlayerDemo = () => {
  return (
    <div className={cn('flex-1', 'flex')}>
      <ReactPlayer
        width="100%"
        height="calc(100vh - 200px)"
        url={`http://vod.v.jstv.com/2025/02/04/JSTV_JSGGNEW_1738669283837_9IgYA02_1378.mp4`}
        controls
      />
    </div>
  );
};

export default ReactPlayerDemo;
