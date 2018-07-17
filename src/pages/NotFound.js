import React from 'react'
import pictureNotFound from '../assets/images/imgAnimal.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='my-5'>
            <div className='d-flex flex-column'>
              <h1 className='text-center card-title mr-5'>404 Page Not Found</h1>
              <p className='card-text'><img className='float-right mr-5' src={pictureNotFound} width='40%' /></p>
            </div>
            <div className='d-flex justify-content-center'>
              <Link to='/' className='btn btn-dark'>Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
