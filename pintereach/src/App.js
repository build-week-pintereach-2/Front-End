import React from 'react';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />  
      </Switch>
       
    </div>
  );
}

export default App;
