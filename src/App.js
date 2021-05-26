import React from 'react';
import './App.css';
import Header from './component/header'
import Home from './component/homepage'
import Detail from './component/Detail'
import Login from './component/Login'
import {
  BrowserRouter as Router, Route, Switch
  
} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/detail/:id" >
          <Detail />
          </Route>
        <Route path="/login">
          <Login />
        </Route>
        
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