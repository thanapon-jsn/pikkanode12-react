import React, { Component } from 'react'
import './assets/styles/pikkanode.css'
import './assets/styles/pikkanode_mp.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import CreatePikka from './pages/CreatePikka'
import NotFound from './pages/NotFound'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  state = {
   isAuth: false
  }

  updateIsAuth = (isAuth) => {
    this.setState({
      isAuth: isAuth
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' render={() => (<SignIn isAuth={this.updateIsAuth} />)} />
          <Route path='/create' component={CreatePikka} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
