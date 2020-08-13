import React from "react";

export default function Header() {
  return (
    <header id="header" className="alt">
      <h1 id="logo">
        <a href="index.html">the Mathshaala</a>
      </h1>
      <nav id="nav">
        <ul>
          <li className="current">
            <a href="index.html">Welcome</a>
          </li>
          <li className="current">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
