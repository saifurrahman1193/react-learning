import React, { Fragment, useEffect } from 'react';
import { HashRouter, Switch, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

// Hooks
import UseMemoExample1 from '../pages/hooks/useMemo/example_1/useMemo';


function Router(props) {

    return (
        <Fragment>
            <Routes>
                <Route exact path='/' component={Home} />
                <Route exact path='/hooks/useMemo/example-1' component={UseMemoExample1} />
            </Routes>
        </Fragment>
           
    )
}


export default Router;