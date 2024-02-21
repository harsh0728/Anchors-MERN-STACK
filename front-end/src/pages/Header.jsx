// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/myinternships">MyInternships</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
