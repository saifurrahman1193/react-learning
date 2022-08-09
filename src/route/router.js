import React, { Fragment, useEffect } from 'react';
import { HashRouter, Switch, Routes, Route, useLocation } from 'react-router-dom';


import Header from '../layouts/Header';
import Home from '../pages/Home';


function Router(props) {

    return (
        <Fragment>
            <Routes>
                <Route exact path='/' component={Home} />
            </Routes>
        </Fragment>
           
    )
}


export default Router;