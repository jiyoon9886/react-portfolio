import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </Router>
  );
};

export default App;
