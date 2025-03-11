import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.less';
import { useSize } from 'ahooks';
import { useRef, useEffect, useState, Children } from 'react';
import cn from 'classnames';
import IndicatorCard from '@/pages/pageList/func/my-func/components/IndicatorCard';
import CalendarCard from '@/pages/pageList/func/my-func/components/CalendarCard';

const ReactGridLayout = () => {
  const gridRef = useRef(null);
  // layout 是一个对象数组, 格式化为{x: number, y: number, w: number, h: number}
  // 布局中的索引必须与每个项组件上使用的键匹配。
  // 如果选择使用自定义关键点，可以在布局中指定该键
  const initLayout = [
    { i: 'a', x: 0, y: 0, w: 6, h: 1, static: true },
    { i: 'b', x: 0, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: 'c', x: 3, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: 'd', x: 0, y: 2, w: 6, h: 2, minW: 3, maxW: 6, minH: 2 },
  ];

  const [layout, setLayout] = useState(initLayout);

  const items = [
    {
      id: 'a',
      children: () => <div>a</div>,
    },
    {
      id: 'b',
      children: () => <IndicatorCard />,
    },
    {
      id: 'c',
      children: () => <div>c</div>,
    },
    {
      id: 'd',
      children: (layoutConfig: any) => <CalendarCard layoutConfig={layoutConfig} />,
    },
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
        rowHeight={220}
        width={layoutWidth}
        autoSize={true}
        isDraggable={true} // 是否允许拖拽移动位置
        isResizable={true} // 是否允许拖拽放大缩小
        draggableHandle=".move"
        onLayoutChange={(value: any) => {
          console.log('value :>> ', value);
          setLayout(value);
        }}
      >
        {items.map((item, index) => {
          return (
            <div key={item.id} className={styles.item}>
              {item.children(layout[index])}
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default ReactGridLayout;
