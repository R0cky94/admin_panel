import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import Videos from './videos/Videos';
import Audios from './audios/Audios';
import Package from './package/Package';
import Users from './users/Users';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={Videos} />
        <Route path='/tables' component={Audios} />
        <Route path='/maps' component={Package} />
        <Route path='/404' component={Users} />
      </Switch>
    );
  }
}

export default Routes;
