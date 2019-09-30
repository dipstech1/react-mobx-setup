import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import commonStore from './store/commonStore'
import Header from './components/layouts/Header'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.getItem('token') ?
                <div>
                    <Header/>
                    <Redirect to="/dashboard" />
                </div>
                
            :  <Component {...props} />

        )} />
    );
};

export default PrivateRoute;