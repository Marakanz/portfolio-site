import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiCodeSSlashFill } from "react-icons/ri";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(true);

  const stickTop = () => {
    if (window.scrollY >= 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickTop);

  return (
    <nav id="navbar" className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="flex justify-between items-center">
        <RiCodeSSlashFill className="text-5xl text-teal-300 font-bold" />
        <button onClick={() => setOpen(!open)}>
          <FaBars className="text-white text-2xl md:hidden" />
        </button>
      </div>
      <ul className={`${open ? "nav-menu" : "nav-menu closed"}`}>
        <div className="w-full md:w-0 px-6 flex justify-end">
          <button onClick={() => setOpen(!open)}>
            <IoClose className="text-5xl font-bold md:hidden" />
          </button>
        </div>
        <li onClick={() => setOpen(!open)}>
          <a className="nav-item" href="#">
            Home
          </a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a className="nav-item" href="#about">
            About
          </a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a className="nav-item" href="#projects">
            Projects
          </a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a className="nav-item" href="#contact">
            Contact
          </a>
        </li> 
      </ul>
    </nav>
  );
};

export default Navbar;
