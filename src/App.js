import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import History from './Components/History';
import Home from './Components/Home';
import Logo from './Components/Logo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          {/* <Route exact path='/' component={Logo} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/our-history' component={History} />
        </div>
      </Switch>
    </Router>
  );
}


export default App;
