import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';

import Deliveries from '~/pages/Deliveries';
import AddDelivery from '~/pages/Deliveries/AddDelivery';
import EditDelivery from '~/pages/Deliveries/EditDelivery';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/add" component={AddDelivery} isPrivate />
      <Route path="/deliveries/edit/:id" component={EditDelivery} isPrivate />
    </Switch>
  );
}
