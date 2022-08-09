import React, { Fragment, useEffect } from 'react';
import { HashRouter, Switch, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

// Hooks
import UseMemoExample1 from '../pages/hooks/useMemo/example_1';


function Router(props) {

    return (
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/hooks/useMemo/example-1' element={<UseMemoExample1/>} />
            </Routes>
    )
}


export default Router;