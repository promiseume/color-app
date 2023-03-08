import React, { useState } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  copyText:{
    color: props => chroma(props.backgroundcolor).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props => chroma(props.backgroundcolor).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore:{
    color: props => chroma(props.backgroundcolor).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    background: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  border: "none",
  right: "0",
  bottom: "0",
  color: "white",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px"
  }

}
function ColorBox(props) {
  const { classes } = props;
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const isDarkColor = chroma(props.backgroundcolor).luminance() <= 0.08;
  const isLightColor = chroma(props.backgroundcolor).luminance() >= 0.7;
  return (
    <CopyToClipboard text={props.backgroundcolor} onCopy={changeCopyState}>
      <div style={{ background: props.backgroundcolor }} className="ColorBox">
        <div
          style={{ background: props.backgroundcolor }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{props.backgroundcolor}</p>
        </div>
        <div className="copy-container">
          <div className="box-container">
            <span className={classes.colorName}>{props.name}</span>
          </div>
          <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
        </div>
        {props.showLink &&
        <Link to={`/palette/${props.paletteId}/${props.id}`} onClick={(e) => e.stopPropagation()}>
          <span className={classes.seeMore}>More</span>
        </Link>
}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles) (ColorBox);