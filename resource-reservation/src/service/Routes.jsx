import React from 'react';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import IsAutheticated from './Auth';

import Login from '../pages/login/login';
import Home from '../pages/home/home';

 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = { IsAutheticated ?  Home : Login }/>            >
            <PrivateRoute exact path="/home" component = { Home }/>
        </Switch>
    </BrowserRouter>
);
export default Routes;