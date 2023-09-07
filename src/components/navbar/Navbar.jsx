import React from "react";
import logo from "../../assets/images/logo.png";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="navbar py-4 bg-base-100 border-b-2 px-10">
      <div className="navbar-start w-1/3 hidden md:block cursor-pointer">
        <div className="dropdown">
          <img width={102} height={32} src={logo} alt="logo" />
        </div>
      </div>

      <Search />
      <div className="navbar-end w-1/3">
        {" "}
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
