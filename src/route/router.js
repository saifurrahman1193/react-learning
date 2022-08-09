import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// Hooks
import UseMemoHookExample1 from '../pages/hooks/useMemo/example_1';

function Router(props) {

    return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/hooks/useMemo/example-1' element={<UseMemoHookExample1/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
    )
}

export default Router;