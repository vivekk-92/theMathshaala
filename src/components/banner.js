import React from "react";

export default function Banner() {
  return (
    <section id="banner">
      <div className="inner">
        <header>
          <h2>Fun With Maths</h2>
        </header>
        <p>
          | Creation and Automisation of concepts |
          <br /> | Number Sense | Tessellation | Patterns |<br />
          | Multiplication and Division |
          <br />
          | Algebra | Fraction | Shapes |<br /> | Area and Perimeter |
        </p>
        <footer>
          <ul className="buttons stacked">
            <li>
              <a href="#main" className="button fit scrolly">
                Let's Explore
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
