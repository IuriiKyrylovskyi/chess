import React from 'react';
import './style.scss';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="./logo.jpeg" alt="utlandia" />
      </div>
      <div className="navbar__logo">UTLANDIA</div>
      <div className="navbar__select">building 1</div>
      <div className="navbar__select">section 1</div>
      <div className="navbar__search">search</div>
      <div className="navbar__close">
        <GrClose />
      </div>
    </div>
  );
};

export default Navbar;
