import React from "react";
import "./listStyle.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = (props) => {
  return (
    <DragDropContext onDragEnd={props.handleDragEnd}>
      <Droppable droppableId='colorList'>
        {(provided) => (
          <div
            className='ui segment'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h1>List of colors</h1>
            {props.colors.map((color, index) => {
              return (
                <Draggable key={color} draggableId={color} index={index}>
                  {(provided) => (
                    <div
                      className='ui segment'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        color: `${color}`,
                        fontWeight:
                          color === props.currentColor ? "900" : "normal",
                      }}
                    >
                      {color}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
