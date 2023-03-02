import React from 'react'
import MiniPalette from './miniPalette'
import { withStyles } from "@material-ui/styles";
import { useNavigate } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
   width: "80%",
   display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
  display: "flex",
  width: "100%",
  color: "white",
  justifyContent: "space-between",
  },
  palettes: {
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  gridGap: "5%"
  }
}

function PaletteList({palettes, classes}) {
  const navigate = useNavigate();
  const handlePaletteClick = (id) => {
    navigate(`/palette/${id}`);
   }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>  <h1>React Colors</h1></nav>
        <div className={classes.palettes}>
        {palettes.map(palette =>(
        <MiniPalette {...palette} handlePaletteClick={() => handlePaletteClick(palette.id)}/>
    ))}
        </div>
      </div>
      </div>
  )
}
export default withStyles(styles) (PaletteList);
