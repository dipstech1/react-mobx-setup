import React from "react";

import { Switch, BrowserRouter, Route } from "react-router-dom";

import PrivateRoute from './../ProtectedRoute'
import PublicRoute from './../PublicRoute'

import LoginContainer from "../components/auth/Containers/LoginContainer";
import Dashboard from "../components/dashboard/dashboard"
import UserDetails from '../components/details/user-details'
class App extends React.Component {

    componentDidMount(){
        // if(localStorage.getItem('token')){
        //     window.location.href = "/dashboard"
        // }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute component={Dashboard} path="/dashboard"></PrivateRoute>
                        <PrivateRoute component={UserDetails} path="/details/:id"></PrivateRoute>

                        <Route component={LoginContainer} path="/"></Route>

                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
