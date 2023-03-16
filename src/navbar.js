import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import styles from "./styles/navStyle";
import { withStyles } from "@material-ui/styles";

 function Navbar(props) {
  const { level,handleLevelChange, handleColorFormat, isSingleColor, classes } = props;
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    handleColorFormat(e.target.value);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">React Color Picker</Link>
      </div>
      {!isSingleColor && (
      <div className={classes.sliderContainer}>
        <span className={classes.sliderLevel}>Level: {level}</span>
        <div className={classes.slider}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={handleLevelChange}
            step={100}
          />
        </div>
      </div>)
}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">Hex : #fffff</MenuItem>
          <MenuItem value="rgb">RGB : (255,255,255) </MenuItem>
          <MenuItem value="rgba">RGBA : (255,255,255, 0.1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </nav>
  );
}
export default withStyles(styles) (Navbar);