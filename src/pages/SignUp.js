import React from 'react'
import FormSignUp from '../components/FormSignUp'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    signUpStatus: false
  }

  setSignUpSuccess = (signUpStatus) => {
    this.setState({
      signUpStatus: signUpStatus
    })
  }

  render () {
    const { signUpStatus } = this.state
    if (signUpStatus) {
      return <Redirect to='/signin' />
    }
    return (
      <div className='row justify-content-center my-5'>
        <div className='card mx-5'>
          <header className='card-header py-0'>
            <h5 className='card-title my-2'>Sign up</h5>
          </header>
          <article className='card-body px-3'>
            <FormSignUp setSignUpSuccess={this.setSignUpSuccess}/>
          </article>
          <footer className='border-top card-body text-center py-2'>Have an account?<Link to='/signin'>Log In</Link></footer>
        </div>
      </div>
    )
  }
}

export default SignUp
