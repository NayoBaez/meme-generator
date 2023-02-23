import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="../images/troll-face.png"
        alt="troll-face"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project"> Easily add text to images or memes</h4>
    </header>
  );
}
