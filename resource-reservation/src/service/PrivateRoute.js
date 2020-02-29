import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import IsAuthenticated from './Auth';

const PrivateRoute = ( { component: Component, ...rest } ) => (
    <Route 
        { ...rest }  
        render = { props => 
            IsAuthenticated() ? (
                <Component { ...props} />
            ) : ( 
                <Redirect to={{ pathname:'/login', state: { from: props.location } }}/>
            )
        }
    />
);
export default PrivateRoute;