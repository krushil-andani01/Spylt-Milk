import React from "react";
import assets from "../../public/assets";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <img src={assets.nav_logo} alt="nav_logo" className="md:w-24 w-20" />
    </nav>
  );
};

export default Navbar;
