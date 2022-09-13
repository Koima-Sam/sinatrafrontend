import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" exact="true">
        <button className="btn">Home</button>
      </NavLink>

      <NavLink to="/assigned" exact="true">
        <button className="btn">Assigned</button>
      </NavLink>

      <NavLink to="/new" exact="true">
        <button className="btn">Add Employee</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
