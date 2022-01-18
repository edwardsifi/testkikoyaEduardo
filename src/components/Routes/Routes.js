// componente de enrutamiento
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Introducir componentes
import Home from '../../App';
import Login from '../Login';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>
    )
}

export default AppRouter;