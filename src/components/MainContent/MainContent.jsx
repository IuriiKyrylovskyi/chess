import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainChess from '../MainChess/MainChess';
import MainCards from '../MainCards/MainCards';
import MainTable from '../MainTable/MainTable';

const MainContent = () => {
  return (
    <div className="main__content">
      <Switch>
        <Route path="/" exact>
          <MainChess />
        </Route>
        <Route path="/cards">
          <MainCards />
        </Route>
        <Route path="/table">
          <MainTable />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
