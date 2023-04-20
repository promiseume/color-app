import React, { useState } from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import PalletteModalForm from "./palletteModalForm";
import useStyles from "./styles/paletteNavStyles";

export default function PalleteNav({
  open,
  handleDrawerOpen,
  saveColors,
  newPaletteName,
  handlePaletteNameChange,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {!open && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
        <div className={classes.navBtn}>
          <Button
            variant="contained"
            color="secondary"
            onClick={goBack}
            className={classes.button}
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleModalOpen}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {openModal && (
        <PalletteModalForm
          saveColors={saveColors}
          newPaletteName={newPaletteName}
          handlePaletteNameChange={handlePaletteNameChange}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
}
