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

  const onDragStart = () => {};
  const onDragUpdate = () => {};
  // FIXME: 待优化，拖动卡，有bug
  const onDragEnd = (result) => {
    console.log('result', result);
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    let arr;
    arr = Array.from(todos);
    console.log(111111122, arr);
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, remove);
    setTodos(arr);
  };
  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cn('droppable-box')}
          >
            {todos.map((t, i) => (
              <Draggable draggableId={t.id} key={i} index={i}>
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
