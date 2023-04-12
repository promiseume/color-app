import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./draggableColorBox";

const DraggableColorList = SortableContainer(
  ({ colors, handleDeleteColor }) => {
    // const handleDeleteColor = (colorName) => {
    //   setColors(colors.filter((color) => color.name !== colorName));
    // };
    return (
      <div style={{ height: "100%" }}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleDeleteColor={() => handleDeleteColor(color.name)}
          />
        ))}
      </div>
    );
  }
);
export default DraggableColorList;
