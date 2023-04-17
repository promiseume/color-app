import React from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import PalletteModalForm from "./palletteModalForm";
const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: "row",
        justifyContent: "space-between",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navBtn: {
       
    }
  }));
  

export default function PalleteNav({
  open,
  handleDrawerOpen,
  saveColors,
  newPaletteName,
  handlePaletteNameChange,
}) {
    const classes = useStyles();
  const navigate = useNavigate();

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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
        <div className={classes.navBtn}>
        <PalletteModalForm saveColors={saveColors} newPaletteName={newPaletteName} handlePaletteNameChange={handlePaletteNameChange}/>
          <Button variant="contained" color="secondary" onClick={goBack}>
              Go Back
            </Button>
          </div>
      </AppBar>
    </div>
  );
}
