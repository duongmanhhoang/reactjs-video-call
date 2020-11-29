 
 
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Room from '../views/room';

const Routes = () => (
    <Switch>
        <Route
            exact
            path='/'
            component={Home}
        />
        <Route
            exact
            path='/room/:code'
            component={Room}
        />
    </Switch>
);

export default Routes;