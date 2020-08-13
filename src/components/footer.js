import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon brands circle fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=themathshaala@gmail.com&su=SUBJECT&body=BODY"
            target="_blank"
            className="icon brands circle fa-google-plus-g"
          >
            <span className="label">Google+</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
