import React, { Fragment, useEffect } from 'react';
import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';


import Header from '../layouts/Header';
import Home from '../pages/Home';


function Router(props) {

    return (
        <Fragment>
            <Route exact path='/' component={Home} />
        </Fragment>
           
    )
}


export default Router;