import React from 'react';
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        height: "25%",
        width: "25%",
        margin:"0 auto",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-3.5px",
        position: "relative",
    },
}

 function DraggableColorBox(props) {
    const { classes } = props;
  return (
    <div className={classes.root} style={{backgroundColor : props.color}}>
        {props.color}
    </div>
  )
}
export default withStyles(styles)(DraggableColorBox);