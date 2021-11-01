import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { MoviesApp } from './pages/MoviesApp';
import { HomePage } from './pages/HomePage';


function App() {

  return (
    <Router>
      <Switch>
        <Route path = '/movies' component={MoviesApp}/>
        <Route exact path = '/' component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default App;
