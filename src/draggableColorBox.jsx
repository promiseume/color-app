import React from "react";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/draggableColorBoxStyles"


const DraggableColorBox = SortableElement(
  ({ classes, color, name, handleDeleteColor }) => {
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span> {name}</span>
          <button onClick={handleDeleteColor}>
            {/* <DeleteIcon className={classes.deleteIcon} /> */}
            _
          </button>
        </div>
      </div>
    );
  }
);
export default withStyles(styles)(DraggableColorBox);
