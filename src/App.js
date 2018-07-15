import React, { Component } from 'react'
import './assets/styles/App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    )
  }
}

export default App
