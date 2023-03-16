import React from 'react'
import MiniPalette from './miniPalette'
import { withStyles } from "@material-ui/styles";
import { useNavigate } from 'react-router-dom';
import styles from './styles/paletteListStyles'


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
