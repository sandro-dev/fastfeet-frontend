import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Deliveries from '~/pages/Deliveries';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/deliveries" component={Deliveries} isPrivate />
    </Switch>
  );
}
