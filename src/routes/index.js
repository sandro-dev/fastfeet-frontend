import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';

import Deliveries from '~/pages/Deliveries';
import InsertDelivery from '~/pages/Deliveries/InsertDelivery';
import EditDelivery from '~/pages/Deliveries/EditDelivery';

import Deliverymen from '~/pages/Deliverymen';
import InsertDeliveryman from '~/pages/Deliverymen/InsertDeliveryman';
import EditDeliveryman from '~/pages/Deliverymen/EditDeliveryman';

import Recipients from '~/pages/Recipients';
import InsertRecipient from '~/pages/Recipients/InsertRecipient';
import EditRecipient from '~/pages/Recipients/EditRecipient';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/insert" component={InsertDelivery} isPrivate />
      <Route path="/deliveries/edit/:id" component={EditDelivery} isPrivate />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/insert"
        component={InsertDeliveryman}
        isPrivate
      />
      <Route
        path="/deliverymen/edit/:id"
        component={EditDeliveryman}
        isPrivate
      />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/insert" component={InsertRecipient} isPrivate />
      <Route path="/recipients/edit/:id" component={EditRecipient} isPrivate />

      <Route path="/problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
