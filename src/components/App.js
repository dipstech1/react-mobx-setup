import React from "react";

import { Switch, BrowserRouter, Route } from "react-router-dom";

import PrivateRoute from './../ProtectedRoute'

import LoginContainer from "../components/auth/Containers/LoginContainer";
import Dashboard from "../components/dashboard/dashboard"

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

                        <Route component={LoginContainer} path="/"></Route>

                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
