import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import { useContext } from "react";
import { MarketContext } from "../context/MarketContext";

const Header = ({ logoSrc }) => {
  const { savedList } = useContext(MarketContext);

  return (
    <header id="main-header" className="header-container">
      {/* Logo and Website Name */}
      <div id="logo-section" className="logo-container">
        <img
          id="website-logo"
          src={logoSrc}
          alt="Website Logo"
          className="logo-image"
        />
        <h1 id="website-name" className="website-title">
          Farmers Market Finder
        </h1>
      </div>
      {/* Navigation Bar */}
      <nav id="nav-bar" className="navigation-bar">
        <ul id="nav-list" className="nav-list">
          <li className="nav-item">
            <Link id="home-link" className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link id="savedlist-link" className="nav-link" to="/savedlist">
              Saved List{" "}
              <span id="savedlist-count" className="savedlist-count">
                ({savedList.length})
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
