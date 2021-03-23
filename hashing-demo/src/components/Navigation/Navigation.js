import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">HASHING DEMO</div>
      <div className="navbar-links">
        <NavLink to="/" activeClassName="active">
          Hash
        </NavLink>
		<NavLink to="/mining" activeClassName="active">
          Mine
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
