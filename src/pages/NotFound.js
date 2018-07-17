import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card text-center my-5'>
            <div className='card-body'>
              <h5 className='card-title'>404 Page Not Found</h5>
              <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
              <Link to='/' className='btn btn-dark'>Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
