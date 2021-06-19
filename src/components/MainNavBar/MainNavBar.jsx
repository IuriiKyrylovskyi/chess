import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid } from 'react-icons/fi';
import { DiTrello } from 'react-icons/di';
import { AiOutlineBars } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import './style.scss';

const MainNavBar = () => {
  // const [active, setActive] = useState(false);
  return (
    <div className="nav">
      <div className="nav__column">
        <div className="filter__btn">
          <CgSearch /> filter flat
        </div>
      </div>
      <div className="nav__column">
        <NavLink to="/" exact>
          <div className="nav__chess">
            <FiGrid />
          </div>
        </NavLink>
        <NavLink to="/cards">
          <div className="nav__items">
            <DiTrello />
          </div>
        </NavLink>
        <NavLink to="/table">
          <div className="nav__table">
            <AiOutlineBars />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavBar;
