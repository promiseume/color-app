import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ValidatorForm } from "react-material-ui-form-validator";
import DraggableColorList from "./draggableColorList";
import { arrayMoveImmutable } from "array-move";
import { useNavigate } from "react-router";
import PalleteNav from "./palleteNav";
import ColorPickerForm from "./colorPickerForm";
import useStyles from "./styles/newPaletteStyle"


export default function NewPalette({ savePalette, palettes }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colors, setColors] = useState(palettes[0].colors);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const maxColors = 20;
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every(({ color }) => color !== currentColor)
    );
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(({ paletteName }) => paletteName !== value)
    );
  },[colors,currentColor,palettes]);

  const saveColors = (newPalette) => {
    newPalette.id = newPaletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors
    savePalette(newPalette);
    navigate("/");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMoveImmutable(colors, oldIndex, newIndex));
  };
  const handleDeleteColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const handlePaletteNameChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };
  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      let randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor]);
  };
  const clearPallette = () => {
    setColors([]);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const addNewColor = () => {
    const newColors = { color: currentColor, name: newColorName };
    setColors([...colors, newColors]);
    setNewColorName("");
  };
  const handleChange = (evt) => {
    setNewColorName(evt.target.value);
  };
  const isPaletteFull = colors.length >= maxColors;
  return (
    <div className={classes.root}>
      <PalleteNav
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        newPaletteName={newPaletteName}
        handlePaletteNameChange={handlePaletteNameChange}
        saveColors={saveColors}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
        <Typography variant="h5" gutterBottom>Design Your Own Palette</Typography>
        <div className={classes.buttons}>
          <Button variant="contained" color="secondary" onClick={clearPallette} className={classes.button}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={isPaletteFull}
            className={classes.button}
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm
          currentColor={currentColor}
          updateCurrentColor={updateCurrentColor}
          addNewColor={addNewColor}
          newColorName={newColorName}
          handleChange={handleChange}
          isPaletteFull={isPaletteFull}
        />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          handleDeleteColor={handleDeleteColor}
          setColors={setColors}
          axis={"xy"}
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
