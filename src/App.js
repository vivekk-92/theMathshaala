import React from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Footer from "./components/footer";
import Registration from "./components/registration";

function App() {
  return (
    <div id="page-wrapper">
      <Header />
      <Banner />

      <article id="main">
        <header class="special container">
          <span class="icon solid fa-chart-bar"></span>
          <h2>
            {" "}
            An online Learning Initiative Focused on
            <br />
            <strong> Conceptual Clarity</strong> in Maths Through:
          </h2>
          <p>
            <h5> Stories</h5> <br />
            <h5>Craft</h5> <br />
            <h5>Fun Games</h5> <br />
            <h5>Jodogyan </h5>
            <br />
            <h5>Experiential Learning</h5> <br />
            <h5>No Mugging Up</h5> <br />
            <h5>And A Lot More Fun...</h5>
          </p>
        </header>

        {/* <section class="wrapper style2 container special-alt">
          <div class="row gtr-50">
            <div class="col-8 col-12-narrower">
              <header>
                <h2>
                  Behold the <strong>icons</strong> that visualize what you’re
                  all about. or just take up space. your call bro.
                </h2>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit
                amet. Sed tristique purus vitae volutpat ultrices. eu elit eget
                commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu
                elit eget arcu commodo.
              </p>
              <footer>
                <ul class="buttons">
                  <li>
                    <a href="#" class="button">
                      Find Out More
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
            <div class="col-4 col-12-narrower imp-narrower">
              <ul class="featured-icons">
                <li>
                  <span class="icon fa-clock">
                    <span class="label">Feature 1</span>
                  </span>
                </li>
                <li>
                  <span class="icon solid fa-volume-up">
                    <span class="label">Feature 2</span>
                  </span>
                </li>
                <li>
                  <span class="icon solid fa-laptop">
                    <span class="label">Feature 3</span>
                  </span>
                </li>
                <li>
                  <span class="icon solid fa-inbox">
                    <span class="label">Feature 4</span>
                  </span>
                </li>
                <li>
                  <span class="icon solid fa-lock">
                    <span class="label">Feature 5</span>
                  </span>
                </li>
                <li>
                  <span class="icon solid fa-cog">
                    <span class="label">Feature 6</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="wrapper style1 container special">
          <div class="row">
            <div class="col-4 col-12-narrower">
              <section>
                <span class="icon solid featured fa-check"></span>
                <header>
                  <h3>This is Something</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
            <div class="col-4 col-12-narrower">
              <section>
                <span class="icon solid featured fa-check"></span>
                <header>
                  <h3>Also Something</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
            <div class="col-4 col-12-narrower">
              <section>
                <span class="icon solid featured fa-check"></span>
                <header>
                  <h3>Probably Something</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section class="wrapper style3 container special">
          <header class="major">
            <h2>
              Next look at this <strong>cool stuff</strong>
            </h2>
          </header>

          <div class="row">
            <div class="col-6 col-12-narrower">
              <section>
                <a href="#" class="image featured">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                <header>
                  <h3>A Really Fast Train</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                  ipsum dolore.
                </p>
              </section>
            </div>
            <div class="col-6 col-12-narrower">
              <section>
                <a href="#" class="image featured">
                  <img src="images/pic02.jpg" alt="" />
                </a>
                <header>
                  <h3>An Airport Terminal</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                  ipsum dolore.
                </p>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-12-narrower">
              <section>
                <a href="#" class="image featured">
                  <img src="images/pic03.jpg" alt="" />
                </a>
                <header>
                  <h3>Hyperspace Travel</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                  ipsum dolore.
                </p>
              </section>
            </div>
            <div class="col-6 col-12-narrower">
              <section>
                <a href="#" class="image featured">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <header>
                  <h3>And Another Train</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat commodo suscipit amet sed
                  nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                  vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                  ipsum dolore.
                </p>
              </section>
            </div>
          </div>

          <footer class="major">
            <ul class="buttons">
              <li>
                <a href="#" class="button">
                  See More
                </a>
              </li>
            </ul>
          </footer>
        </section> */}
      </article>

      <Registration />

      <Footer />
    </div>

    // <div>
    //   <Navigation />
    //   <div className="container jumbotron">
    //     <h1 className="text-center">Fun With Maths</h1>
    //   </div>
    //   <div className="row">
    //     <p className="col-sm-4 offset-sm-4 text-center">
    //       Creation and Automisation of concepts | Number Sense | Tessellation |
    //       Patterns | Multiplication and Division | Algebra | Fraction | Shapes |
    //       Area and Perimeter
    //       <hr />
    //     </p>
    //   </div>
    //   <p className="col-sm-4 offset-sm-4 text-center">
    //     An online Learning Initiative <br />
    //     Focused on <br />
    //     Conceptual Clarity in Maths
    //     <br />
    //     Through Stories <br />
    //     Craft <br />
    //     Fun Games <br />
    //     Jodogyan <br />
    //     Experiential Learning <br />
    //     No Mugging Up <br />
    //     And A Lot More Fun...
    //   </p>
    // </div>
  );
}

export default App;
