import React, { useEffect, useState } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  ColorBox:{
    height: props => (props.showfullColor ? "25%" : "50%"),
    width: "20%",
    margin:"0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    position: "relative",
    "&:hover button":{
      opacity: "1"
    }
  },
  boxContainer :{
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
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
  },
  copyButton:{
    color: props => chroma(props.backgroundcolor).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    marginBottom: '-3.5px',
    opacity: '0'
  }
};


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
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
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
