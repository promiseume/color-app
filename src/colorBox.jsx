import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/colorBoxStyles";

function ColorBox(props) {
  const { classes } = props;
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  return (
    <CopyToClipboard text={props.backgroundcolor} onCopy={changeCopyState}>
      <div style={{ background: props.backgroundcolor,height:props.height }} className={classes.ColorBox}>
        <div
          style={{ background: props.backgroundcolor }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{props.backgroundcolor}</p>
        </div>
        <div>
          <div className={classes.boxContainer}>
            <span className={classes.colorName}>{props.name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {props.showfullColor && (
          <Link to={`/palette/${props.paletteId}/${props.id}`}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
export default withStyles(styles) (ColorBox);
