import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import IsAuthenticated from './Auth';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={ IsAuthenticated() ? Home : Login } />
            <PrivateRoute exact path='/home'  component={ Home } />
        </Switch>
    </BrowserRouter>
);
export default Routes;