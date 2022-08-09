import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header'
import Router from './route/router'
import React from 'react';

function App() {
  return (
    <React.Fragment>
            <Header />
            <Router />
    </React.Fragment>
  );
}

export default App;
