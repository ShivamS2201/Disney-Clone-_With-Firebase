import React from 'react';
import './App.css';
import Header from './component/header'
import Home from './component/homepage'
import Detail from './component/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Router path="/detail">
          <Detail />
        </Router>
        <Route path="/">
          <Home />
          </Route>

      </Switch>
      </Router>
      
    </div>
  );
}

export default App;

//Every Page shall have the Header/Nav. 
//Body remians same.