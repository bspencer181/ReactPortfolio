import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import AboutPage from './components/pages/AboutMe';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path= "/about" component={AboutPage} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;