import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import { isAuthenticated } from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ListResources from '../pages/resources/ListResources'
import ListBookings from '../pages/bookings/ListBookings'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={isAuthenticated() ? Home : Login} />
            <PrivateRoute path='/recursos' component={ListResources} />
            <PrivateRoute path='/reservas' component={ListBookings} />
            <PrivateRoute exact path='/home' component={Home} />
        </Switch>
    </BrowserRouter>
);
export default Routes;