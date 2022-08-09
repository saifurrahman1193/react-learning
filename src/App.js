import './App.css';
import Router from './route/route'
import { HashRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <HashRouter>
            <Router />
        </HashRouter>
    </React.Fragment>
  );
}

export default App;
