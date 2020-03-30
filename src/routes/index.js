import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
