import React from 'react'
import SignUp from '../pages/SignUp';

const submitSignUpHandler = (e) => {
  e.preventState()
  console.log(e)
}

const inputChangeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

class FormSignUp extends React.Component {
  state = {
    email: '',
    password: ''
  }
  render () {
    const { email, password } = this.state
    return (
      <div>
        <form>
          <div className="form-group form-control-sm mb-1">
            <label>Email address</label>
            <input type="email" id="inputEmail" name="email" className="form-control" value={email} placeholder="" required="" autofocus="" />
            <small className="form-text text-muted">Email register for login to pikkanode</small>
          </div>
          <div className="form-group form-control-sm mb-1">
            <label>Password</label>
            <input type="password" id="inputPassword" name="password" className="form-control" placeholder="" required="" />
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