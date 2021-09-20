import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plant from './components/PlantObject';
import NewAccount from './components/NewAccount';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/plants'>Plants</Link>
          </li>
          <li>
            <Link to='/newaccount'>New Account</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <center>
            <h1>Water my Plants</h1>
            <Route path='/plants' component={Plant} />
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/login' />
            <Route path='/' />
          </center>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
