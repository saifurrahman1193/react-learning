import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header'
import Router from './route/router'
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
