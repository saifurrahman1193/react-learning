import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header'
import Router from './route/router'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
