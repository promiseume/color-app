import React, { useState } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

export default function ColorBox({ backgroundcolor, name, id,paletteId,showLink }) {
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipboard text={backgroundcolor} onCopy={changeCopyState}>
      <div style={{ background: backgroundcolor }} className="ColorBox">
        <div
          style={{ background: backgroundcolor }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p>{backgroundcolor}</p>
        </div>
        <div className="copy-container">
          <div className="box-container">
            {" "}
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {showLink &&
        <Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
          <span className="see-more">More</span>
        </Link>
}
      </div>
    </CopyToClipboard>
  );
}
