import React from "react";
import "./listStyle.css";

const List = (props) => {
  const listItems = props.colors.map((color) => {
    return (
      <div style={{ color: `${color}` }} key={color}>
        {color}
      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default List;
