import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Projects from '../../pages/Projects/Projects';
import Buildings from '../../pages/Buildings/Buildings';
import Sections from '../../pages/Sections/Sections';
import Types from '../../pages/Types/Types';
import Flats from '../../pages/Flats/Flats';
import MainChess from '../MainChess/MainChess';
import MainCards from '../MainCards/MainCards';
import MainTable from '../MainTable/MainTable';
import Edit from '../Edit/Edit';
// import AddPage from '../../pages/AddPage/AddPage';
import AddProject from '../../pages/AddProject/AddProject';
import AddBuilding from '../../pages/AddBuilding/AddBuilding';
import AddSection from '../../pages/AddSection/AddSection';
import AddType from '../../pages/AddType/AddType';
import NotFound from '../../pages/NotFound/NotFound';

const MainContent = () => {
  return (
    <div className="main__content">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/buildings">
          <Buildings />
        </Route>
        <Route path="/sections">
          <Sections />
        </Route>
        <Route path="/types">
          <Types />
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
        <Route path="/type/add">
          <AddType />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
