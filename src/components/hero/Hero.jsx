import React from 'react';
import Main from '../Main/Main';
import MainFilter from '../MainFilter/MainFilter';
import ItemSlideBar from '../ItemSlideBar/ItemSlideBar';
import './style.scss';

const Hero = () => {
  return (
    <div className="hero">
      <MainFilter />
      <Main />
      <ItemSlideBar />
    </div>
  );
};

export default Hero;
