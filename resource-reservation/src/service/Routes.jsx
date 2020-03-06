import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import IsAuthenticated from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ListResources from '../pages/resources/ListResources'
import ListBookings from '../pages/bookings/ListBookings'
 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={ IsAuthenticated() ? Home : Login } />
            <PrivateRoute exact path='/home'  component={ Home } />
            <Route path='/recursos' component={ListResources}/>
            <Route path='/reservas' component={ListBookings}/>
            
        </Switch>
    </BrowserRouter>
);
export default Routes;