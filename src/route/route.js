import React, { Fragment, useEffect } from 'react';
import Hooks from '../hooks/hooks';
import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';


import Header from '../layouts/Header';
import Home from '../Home';


function Router(props) {

    return (
        <Fragment>
            <HashRouter>
                <Header />
                <Route exact path='/' component={Home} />
            </HashRouter>
        </Fragment>
    )
}


export default Router;