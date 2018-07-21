import React from 'react'
import { fetchApi } from '../services/server'
import { Redirect } from 'react-router-dom'

class FormSignIn extends React.Component {
  state = {
    email: '',
    password: '',
    redirect: false,
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitSignInHandler = async (e) => {
    e.preventDefault()
    console.log(this.state)
    const { email, password } = this.state
    const dataBody = {
      email: email,
      password: password
    }
    const response = await fetchApi('/auth/signin','POST', dataBody)
    console.log(response)
    if (response.status === 200) {
      this.props.isAuth(true)
      this.setState({
        password: '',
        redirect: true
      })
    } else {
      this.setState({
        password: ''
      })
    }
  }

  render () {
    const { email, password , redirect} = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <form onSubmit={this.submitSignInHandler}>
        <div className='form-group form-control-sm mb-1'>
          <label htmlFor='inputEmail'>Username or email</label>
          <input type='email' id='inputEmail' name='email' className='form-control' value={email} onChange={this.inputChangeHandler} placeholder='' required='' autoFocus='' />
        </div>
        <div className='form-group form-control-sm mb-1'>
          <label htmlFor='inputPassword'>Password</label>
          <input type='password' id='inputPassword' name='password' className='form-control' value={password} onChange={this.inputChangeHandler} placeholder='' required='' />
        </div>
        <div className='checkbox form-control-sm'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <div className='form-group form-control-sm mb-0'>
          <button className='btn btn-dark btn-block'>Sign in</button>
        </div>
      </form>
    )
  }
}

export default FormSignIn
