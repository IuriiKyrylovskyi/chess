import React from 'react';
import { Link } from 'react-router-dom';
import { FiGrid } from 'react-icons/fi';
import { DiTrello } from 'react-icons/di';
import { AiOutlineBars } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import './style.scss';

const MainNavBar = () => {
  return (
    <div className="nav">
      <div className="nav__column">
        <div className="filter__btn">
          <CgSearch /> filter flat
        </div>
      </div>
      <div className="nav__column">
        <Link to="/">
          <div className="nav__chess active">
            <FiGrid />
          </div>
        </Link>
        <Link to="/cards">
          <div className="nav__items ">
            <DiTrello />
          </div>
        </Link>
        <Link to="/table">
          <div className="nav__table ">
            <AiOutlineBars />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainNavBar;
