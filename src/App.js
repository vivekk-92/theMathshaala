import React from "react";
import "./App.css";
import Navigation from "./components/navigation";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container jumbotron">
        <h1 className="text-center">Fun With Maths</h1>
      </div>
      <div className="row">
        <p className="col-sm-4 offset-sm-4 text-center">
          Creation and Automisation of concepts | Number Sense | Tessellation |
          Patterns | Multiplication and Division | Algebra | Fraction | Shapes |
          Area and Perimeter
          <hr />
        </p>
      </div>
      <p className="col-sm-4 offset-sm-4 text-center">
        An online Learning Initiative <br />
        Focused on <br />
        Conceptual Clarity in Maths
        <br />
        Through Stories <br />
        Craft <br />
        Fun Games <br />
        Jodogyan <br />
        Experiential Learning <br />
        No Mugging Up <br />
        And A Lot More Fun...
      </p>
    </div>
  );
}

export default App;
