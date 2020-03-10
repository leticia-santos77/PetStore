import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import { isAuthenticated } from './Auth';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ResourceRegistration from '../pages/registration/ResourceRegistration';
import BookingRegistration from '../pages/registration/BookingRegistration';
import CalendarPage from '../pages/calendar/CalendarPage.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import ListResources from '../pages/resources/ListResources';
import ListBookings from '../pages/bookings/ListBookings';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={ isAuthenticated() ? Home : Login } /> 
            <Route path='/login' exact component={isAuthenticated() ? Home : Login} /> 
            <PrivateRoute path='/recursos' component={ListResources} />
            <PrivateRoute path='/reservas' component={ListBookings} />
            <PrivateRoute path='/calendario' component={CalendarPage} />
            <PrivateRoute exact path='/cadastrorecurso' component={ResourceRegistration} />
            <PrivateRoute exact path='/cadastroreserva' component={BookingRegistration} />
            <PrivateRoute path='/home' exact component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
export default Routes;
