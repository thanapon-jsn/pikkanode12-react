import React from 'react'
import FormSignIn from '../components/FormSignIn'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  render () {
    return (
      <div className='row-column justify-content-center my-5 ml-10 mr-10'>
        <div className='card ml-30 mr-30'>
          <header className='card-header py-0 text-center'>
            <img className='my-3' src='/images/letter-p.svg' alt='' width='72' height='72' />
            <h1 className='h3 mb-1 font-weight-normal'>PikkaNode</h1>
            <p className='mb-2'>Login to pikkanode</p>
          </header>
          <article className='card-body px-3'>
            <FormSignIn />
          </article>
          <footer className='card-body text-center py-2'>
          Don't have a Account?<Link to='/signup'>Sign Up</Link>
          </footer>
        </div>
      </div>
    )
  }
}

export default SignIn
