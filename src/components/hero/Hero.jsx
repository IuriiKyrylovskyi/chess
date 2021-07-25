import React from 'react';

import Projects from '../../pages/Projects/Projects';
import Main from '../Main/Main';
import MainFilter from '../MainFilter/MainFilter';
import ItemSlideBar from '../ItemSlideBar/ItemSlideBar';

import './style.scss';

const Hero = () => {
  return (
    <div className="hero">
      <MainFilter />
      {/* <Projects /> */}
      <Main />
      <ItemSlideBar />
    </div>
  );
};

export default Hero;
