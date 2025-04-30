import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex items-center justify-between px-20 py-4">
        <div>
          <h1>logo</h1>
        </div>
        <ul className="flex space-x-4">
          <NavLink>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="about">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink>
            {" "}
            <li>Contact</li>
          </NavLink>
        </ul>
        <Link to="/login">
          <button>login </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
