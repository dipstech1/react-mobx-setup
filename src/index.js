import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {HashRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'

import testStore from './store/testStore'
import authStore from './store/authStore'
import commonStore from './store/commonStore'
import dashboardStore from './store/dashboardStore'

import 'bootstrap/dist/css/bootstrap.min.css';

const store = {
    testStore,
    authStore,
    commonStore,
    dashboardStore
}

let rou = <Provider {...store}><App></App></Provider>

ReactDOM.render(rou, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
