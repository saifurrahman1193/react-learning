import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// Hooks
import UseMemoExample1 from '../pages/hooks/useMemo/example_1';

function Router(props) {

    return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/hooks/useMemo/example-1' element={<UseMemoExample1/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
    )
}

export default Router;