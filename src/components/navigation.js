import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand h1" href="/">
        the MATHSHAALA
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
