import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from '../../pages/Projects/Projects';
import Buildings from '../../pages/Buildings/Buildings';
import Sections from '../../pages/Sections/Sections';
import MainChess from '../MainChess/MainChess';
import MainCards from '../MainCards/MainCards';
import MainTable from '../MainTable/MainTable';
import Edit from '../Edit/Edit';
import Add from '../Add/Add';

const MainContent = () => {
  return (
    <div className="main__content">
      <Switch>
        <Route path="/" exact>
          <Projects />
        </Route>
        <Route path="/projects/buildings">
          <Buildings />
        </Route>
        <Route path="/projects/buildings/sections">
          <Sections />
        </Route>
        <Route path="/chess">
          <MainChess />
        </Route>
        <Route path="/cards">
          <MainCards />
        </Route>
        <Route path="/table">
          <MainTable />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
