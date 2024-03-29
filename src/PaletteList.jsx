import React from "react";
import MiniPalette from "./miniPalette";
import { withStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import styles from "./styles/paletteListStyles";
import { Link } from "react-router-dom";

function PaletteList({ palettes, classes, deletePalette }) {
  const navigate = useNavigate();
  const handlePaletteClick = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <p>
            <Link to="/palette/new">Create Palette</Link>
          </p>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handlePaletteClick={() => handlePaletteClick(palette.id)}
              deletePalette={deletePalette}
              id={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(PaletteList);
