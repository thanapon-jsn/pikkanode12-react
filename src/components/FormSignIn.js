import React from 'react'

class FormSignIn extends React.Component {
  render () {
    return (
      <form>
        <div className='form-group form-control-sm mb-1'>
          <label for='inputEmail'>Username or email</label>
          <input id='inputEmail' name='email' className='form-control' placeholder='' required='' autoFocus='' />
        </div>
        <div className='form-group form-control-sm mb-1'>
          <label for='inputPassword'>Password</label>
          <input type='password' id='inputPassword' name='password' className='form-control' placeholder='' required='' />
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
