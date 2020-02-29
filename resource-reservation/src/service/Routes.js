import React from 'react';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login/login';

 const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {() => <Login/> }/>
            <PrivateRoute exact path="/home" component = {() => <h1>logado</h1> }/>
        </Switch>
    </BrowserRouter>
);
export default Routes;