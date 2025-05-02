import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" items-center ">
      <nav className=" flex items-center justify-between px-20 py-4 bg-[#FFC300] w-5/6 fixed ">
        <div>
          <h1>logo</h1>
        </div>
    <div>
      
    <Link to="/login">
          <button>login </button>
        </Link>
    </div>
      </nav>
    </div>
  );
};

export default Navbar;
