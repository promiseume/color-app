import React, { useState } from "react";
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
}) {
  const [stage, setStage] = useState("form");
  const showEmojiPicker = () => {
    setStage("emoji");
  };
  const savePalette = (emoji) => {
    const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
    saveColors(newPalette);
  };
  return (
    <>
      <Dialog open={stage === "emoji"} onClose={handleModalClose}>
        <DialogTitle> Choose a Palette Emoji</DialogTitle>
        <Picker data={data} onEmojiSelect={savePalette} theme={"light"} />
      </Dialog>
      <Dialog open={stage === "form"} onClose={handleModalClose}>
        <DialogTitle>Choose a Pallete name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
}
