import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/Header'
import Router from './route/Router'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Container fluid>
            <Header />
            <Router />
          </Container>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
