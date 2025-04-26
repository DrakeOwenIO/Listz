
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./splashpage.css";
import TopBar from "./TopBar/TopBar";
import AnimatedListShowcase from "./ListAnimation/AnimatedListShowcase";

const Splashpage = () => {
  return (
    <div className="copyright">
      <div className="page-container">
        <TopBar />

        <div className="body-container">
          <div className="body-flex-row">
            <div className="marketing-container">
              <div className="tagline">
                <h1>
                  <div className="purple">Extraordinarily</div> powerful
                </h1>
                <h1>
                  <div className="purple">Extraordinarily</div> simple
                </h1>
              </div>
              <div className="description-text">
                <p>
                  Simple – powerful, and flexible enough to track anything. From
                  industrial material tracking to a personal grocery list. We
                  got you covered.
                </p>
              </div>
              <div className="cta-button-container mobile-cta">
                <button className="cta-button">Try for free!</button>
              </div>
            </div>

            <div className="animation-container">
              <AnimatedListShowcase />
            </div>
          </div>
        </div>
      </div>
      <h5>© 2025 Drake Owen </h5>
    </div>
  );
};

export default Splashpage;
