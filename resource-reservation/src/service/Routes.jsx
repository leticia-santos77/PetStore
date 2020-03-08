import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import IsAuthenticated from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ListResources from '../pages/resources/ListResources'
import ListBookings from '../pages/bookings/ListBookings'

import CalendarPage from '../pages/calendar/CalendarPage.jsx';
 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={ IsAuthenticated() ? Home : Login } />
            <Route path='/recursos' component={ ListResources }/>
            <Route path='/reservas' component={ ListBookings }/>
            <Route path='/calendario' component={ CalendarPage } />
            <PrivateRoute exact path='/home'  component={ Home } />
        </Switch>
    </BrowserRouter>
);
export default Routes;