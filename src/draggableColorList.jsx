import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./draggableColorBox";

const DraggableColorList = SortableContainer(
  ({ colors, handleDeleteColor }) => {
    return (
      <div style={{ height: "100%" }}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleDeleteColor={() => handleDeleteColor}
          />
        ))}
      </div>
    );
  }
);
export default DraggableColorList;
