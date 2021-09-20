import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plant from './PlantObject';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/plants'>Plants</Link>
          </li>
        </ul>
        <Switch>
          <center>
            <h1>Water my Plants</h1>
            <Route path='/plants' component={Plant} />
          </center>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
