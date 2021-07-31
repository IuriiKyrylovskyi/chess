import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from '../../pages/Projects/Projects';
import Buildings from '../../pages/Buildings/Buildings';
import Sections from '../../pages/Sections/Sections';
import Plans from '../../pages/Plans/Plans';
import Flats from '../../pages/Flats/Flats';
import MainChess from '../MainChess/MainChess';
import MainCards from '../MainCards/MainCards';
import MainTable from '../MainTable/MainTable';
import Edit from '../Edit/Edit';
import AddPage from '../../pages/AddPage/AddPage';
import AddProject from '../../pages/AddProject/AddProject';
import AddBuilding from '../../pages/AddBuilding/AddBuilding';
import AddSection from '../../pages/AddSection/AddSection';
import AddPlan from '../../pages/AddPlan/AddPlan';

const MainContent = () => {
  return (
    <div className="main__content">
      <Switch>
        <Route path="/" exact>
          <Projects />
        </Route>
        <Route path="/buildings">
          <Buildings />
        </Route>
        <Route path="/sections">
          <Sections />
        </Route>
        <Route path="/plans">
          <Plans />
        </Route>
        <Route path="/flats">
          <Flats />
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
        {/* <Route path="/add">
          <AddPage />
        </Route> */}
        <Route path="/project/add">
          <AddProject />
        </Route>
        <Route path="/building/add">
          <AddBuilding />
        </Route>
        <Route path="/section/add">
          <AddSection />
        </Route>
        <Route path="/plan/add">
          <AddPlan />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
