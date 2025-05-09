import { useState } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="TopBarContainer">
      <div className="logo">
       <h1>LISTZ</h1>
      </div>

      <div className={`TopLinksContainer ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="TopLink" onClick={() => setMenuOpen(false)}>
          Pricing
        </Link>
        <Link to="/" className="TopLink" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/" className="SignUpButton" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link to="/Signup" className="SignUpButton" onClick={() => setMenuOpen(false)}>
          Signup
        </Link>
      </div>

      <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>
  );
};

export default TopBar;