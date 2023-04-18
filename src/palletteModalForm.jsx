import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function PalletteModalForm({
  handlePaletteNameChange,
  saveColors,
  newPaletteName,
  handleModalClose,
  openModal,
}) {
  return (
    <Dialog open={openModal} onClose={handleModalClose}>
      <DialogTitle>Choose a Pallete name</DialogTitle>
      <ValidatorForm onSubmit={saveColors}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's
            unique!
          </DialogContentText>
          <TextValidator
            value={newPaletteName}
            fullWidth
            margin="normal"
            label={"Enter palette name"}
            onChange={handlePaletteNameChange}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter palette name", "Name already used"]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
          <Picker data={data} onEmojiSelect={console.log} />
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
