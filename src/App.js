import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plant from './components/PlantObject';
import Signup from './components/signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PlantCard from './components/PlantCard';
import UpdateUser from './components/UpdateUser';

// import * as yup from 'yup';

import './App.css';
import axios from 'axios';

function App() {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axios.get('https://water-my-plants-bw3.herokuapp.com/api/plants')
    .then(res => {
      setPlant(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <Router>
      <div className='App'>
        <header className="header">
          <div className="name-div">
            <h2>Water my Plants</h2>
          </div>
          <ul className="links-list">
            
            <li>
              <Link className="link" to='/plants'>Plants</Link>
            </li>
            <li>
              <Link className="link" to='/user'>Update User</Link>
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
            <PrivateRoute 
              path='/plants' 
              component={Plant} 
              render={props => <PlantCard {...props} setPlant={setPlant}/>}
            />
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
