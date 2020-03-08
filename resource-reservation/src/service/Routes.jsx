import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import { isAuthenticated } from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
<<<<<<< HEAD
import ResourceRegistration from '../pages/registration/ResourceRegistration';
import BookingRegistration from '../pages/registration/BookingRegistration';

=======
import ListResources from '../pages/resources/ListResources'
import ListBookings from '../pages/bookings/ListBookings'
>>>>>>> 5a5c2c4b6cce5a69580b25692454e020de16d248
 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={ isAuthenticated() ? Home : Login } />
            <PrivateRoute path='/recursos' component={ListResources}/>
            <PrivateRoute path='/reservas' component={ListBookings}/>
            <PrivateRoute exact path='/home'  component={ Home } />
            <PrivateRoute exact path='/resourceRegistration'  component={ ResourceRegistration } />
            <PrivateRoute exact path='/bookingRegistration'  component={ BookingRegistration } />
        </Switch>
    </BrowserRouter>
);
export default Routes;
