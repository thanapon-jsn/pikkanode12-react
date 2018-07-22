import React from 'react'
import FormCreatePikka from '../components/FormCreatePikka'

class CreatePikka extends React.Component {
  render () {
    return (
      <div className='main-body'>
        <article className='container'>
          <div className='row justify-content-center'>
            <div className='card m-5'>
              <article className='card-body p-0'>
                <FormCreatePikka />
              </article>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default CreatePikka
