import React from 'react';
import './style.scss';
import { GrClose } from 'react-icons/gr';
import { CgSearch } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <img src="./logo.jpeg" alt="utlandia" />
      </span>
      <div className="navbar__logo">UTLANDIA</div>
      <div className="navbar__select">
        building 1 <IoMdArrowDropdown />
      </div>
      <div className="navbar__select">
        section 1 <IoMdArrowDropdown />
      </div>
      <div className="navbar__search">
        search <CgSearch />
      </div>
      <div className="navbar__close">
        <GrClose />
      </div>
    </div>
  );
};

export default Navbar;
