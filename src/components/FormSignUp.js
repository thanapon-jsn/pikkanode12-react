import React from 'react'
import { fetchApi } from '../services/server'
import { Redirect } from 'react-router-dom'

class FormSignUp extends React.Component {
  state = {
    email: '',
    password: '',
    redirect: false
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitSignUpHandler = async (e) => {
    e.preventDefault()
    console.log(this.state)
    const { email, password} = this.state
    const dataBody = {
      email: email,
      password: password
    }
    const response = await fetchApi('/auth/signup','POST', dataBody)
    console.log(response)
    if (response.status === 200) {
      this.setState({
        redirect: true,
        password: ''
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
      return <Redirect to='/signup' />
    }
    return (
      <div>
        <form onSubmit={this.submitSignUpHandler}>
          <div className="form-group form-control-sm mb-1">
            <label>Email address</label>
            <input type="email" id="inputEmail" name="email" className="form-control" value={email} onChange={this.inputChangeHandler}  required="" autoFocus="" />
            <small className="form-text text-muted">Email register for login to pikkanode</small>
          </div>
          <div className="form-group form-control-sm mb-1">
            <label>Password</label>
            <input type="password" id="inputPassword" name="password" className="form-control" value={password} onChange={this.inputChangeHandler} placeholder="" required="" />
          </div>
            <div className="form-group form-control-sm my-0">
              <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our
              <br /> Terms of use and Privacy Policy.</small>
            </div>
          <div className="form-group form-control-sm mb-0">
            <button className="btn btn-dark btn-block">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormSignUp