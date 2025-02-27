import React, { useState } from 'react';
import cn from 'classnames';
import './index.less';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dnd = () => {
  const testData = [
    {
      id: '1',
      text: 'A',
    },
    {
      id: '2',
      text: 'B',
    },
    {
      id: '3',
      text: 'C',
    },
    {
      id: '4',
      text: 'D',
    },
    {
      id: '5',
      text: 'E',
    },
    {
      id: '6',
      text: 'F',
    },
  ];
  const [todos, setTodos] = useState([...testData]);

  // 拖拽开始回调
  const onDragStart = () => {};
  // 拖拽中的回调
  const onDragUpdate = () => {};

  // 拖拽结束时的回调
  const onDragEnd = (result) => {
    console.log('result', result);
    /**
     * source: 拖动目标来源的位置信息
     * destination: 拖动目标最终放置的位置信息
     */
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    let arr;
    arr = Array.from(todos);
    console.log('arr 1111111', arr);
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, remove);
    console.log('arr 2222222', arr);
    setTodos(arr);
  };
  return (
    <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={cn('droppable-box')}>
            {todos.map((t, i) => (
              // draggableId 和 key 应为 string；
              <Draggable draggableId={t.id} key={t.id} index={i}>
                {(p) => (
                  <div
                    key={t.id}
                    ref={p.innerRef}
                    {...p.draggableProps}
                    {...p.dragHandleProps}
                    className={cn('draggable-item')}
                  >
                    {t.text}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dnd;
