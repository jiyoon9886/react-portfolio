import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import { Container, Row, Col } from 'react-bootstrap';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Route path='/' component={Home} /> */}
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
