import React from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/styles";
import styles from './styles/colorPickerStyles'

function ColorPickerForm(props) {
    const {
        currentColor,
        updateCurrentColor,
        addNewColor,
        newColorName,
        handleChange,
        isPaletteFull,
        classes
      } = props;
  return (
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={addNewColor} className={classes.formInput}>
        <TextValidator
          value={newColorName}
          onChange={handleChange}
          name="newColorName"
          margin="normal"
          placeholder="Color Name"
          variant="filled"
          className={classes.colorInput}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "color name must be unique",
            "color already used",
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
          className={classes.addColor}
          disabled={isPaletteFull}
          type="submit"
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
}
export default withStyles(styles) (ColorPickerForm);