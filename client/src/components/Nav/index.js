import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/log">Log</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
