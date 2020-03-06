import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import IsAuthenticated from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ResourceRegistration from '../pages/registration/ResourceRegistration';

 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={ IsAuthenticated() ? Home : Login } />
            <PrivateRoute exact path='/home'  component={ Home } />
            <PrivateRoute exact path='/resourceRegistration'  component={ ResourceRegistration } />
        </Switch>
    </BrowserRouter>
);
export default Routes;
