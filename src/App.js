import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import { Container, Row, Col } from 'react-bootstrap';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Navbar from './components/Navbar.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Route path='/' component={Home} /> */}
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
