import React from "react";

function Header() {
  return (
    <div className="header-container row">
      <h1 className="header-title">Math Magicians</h1>
      <nav className="nav">
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Calculator</li>
          <li className="list-item">Quote</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
