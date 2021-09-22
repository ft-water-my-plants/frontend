import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plant from './components/PlantObject';
import Signup from './components/signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PlantCard from './components/PlantCard'

// import * as yup from 'yup';

import './App.css';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className="header">
          <div className="name-div">
            <h2>Water my Plants</h2>
          </div>
          <ul className="links-list">
            <li>
              <Link className="link" to='/user'>Update User</Link>
            </li>
            <li>
              <Link className="link" to='/plants'>Plants</Link>
            </li>
            <li>
              <Link className="link" to='/signup'>New Account</Link>
            </li>
            <li>
              <Link className="link" to='/login'>Login</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <center>
            <h1>Water my Plants</h1>
            <Route path='/plant-card' component={PlantCard} />
            <PrivateRoute path='/plants' component={Plant} />
            <PrivateRoute path='/user' component={UpdateUser} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login}/>
            <Route path='/'/>
          </center>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
