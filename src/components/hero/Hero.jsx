import React from 'react';
import Main from './Main/Main';
import MainFilter from './MainFilter';
import ItemSlideBar from './ItemSlideBarr';

const Hero = () => {
  return (
    <div>
      <MainFilter />
      <Main />
      <ItemSlideBar />
    </div>
  );
};

export default Hero;
