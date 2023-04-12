import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    height: "25%",
    width: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    position: "relative",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.1)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
    color: "rgba(0,0,0,0.5)",
    "&:hover": {
      color: "white",
    },
  },
};

const DraggableColorBox = SortableElement(
  ({ classes, color, name, handleDeleteColor }) => {
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span> {name}</span>
          <button onClick={handleDeleteColor}>
            {/* <DeleteIcon className={classes.deleteIcon} /> */}
            hi
          </button>
        </div>
      </div>
    );
  }
);
export default withStyles(styles)(DraggableColorBox);
