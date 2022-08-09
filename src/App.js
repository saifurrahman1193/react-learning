import './App.css';
import Router from './route/route'
import Header from './layouts/Header'
import { HashRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <HashRouter>
            <Header />
            <Router />
        </HashRouter>
    </React.Fragment>
  );
}

export default App;
