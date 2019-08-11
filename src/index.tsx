import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.scss';
import Welcome from './components/welcome';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/welcome" component={Welcome} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();