import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.less';
import { useSize } from 'ahooks';
import { useRef, useEffect, useState } from 'react';
import cn from 'classnames';

const ReactGridLayout = () => {
  const gridRef = useRef(null);
  // layout 是一个对象数组, 格式化为{x: number, y: number, w: number, h: number}
  // 布局中的索引必须与每个项组件上使用的键匹配。
  // 如果选择使用自定义关键点，可以在布局中指定该键
  const layout = [
    { i: 'a', x: 0, y: 0, w: 6, h: 1, static: true },
    { i: 'b', x: 0, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: 'c', x: 3, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: 'd', x: 0, y: 2, w: 6, h: 2, minW: 6 },
  ];

  const size = useSize(gridRef);
  const [layoutWidth, setLayoutWidth] = useState<number>(1400);

  useEffect(() => {
    if (size && size.width) {
      setLayoutWidth(size.width);
    }
  }, [size]);

  return (
    <div ref={gridRef} className={cn(styles.container, 'scroll_thin')}>
      <GridLayout
        className={styles.layout}
        layout={layout}
        cols={6}
        rowHeight={100}
        width={layoutWidth}
        autoSize={true}
        isDraggable={true} // 是否允许拖拽移动位置
        isResizable={true} // 是否允许拖拽放大缩小
        // draggableHandle=".move"
      >
        <div key="a" className={styles.item}>
          a
        </div>
        <div key="b" className={styles.item}>
          b
        </div>
        <div key="c" className={styles.item}>
          c
        </div>
        <div key="d" className={styles.item}>
          d
        </div>
      </GridLayout>
    </div>
  );
};

export default ReactGridLayout;
