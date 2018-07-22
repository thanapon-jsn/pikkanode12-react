import React from 'react'
import imageDefault from '../assets/images/icon_blank.png'
import { fetchApi } from '../services/server'
import { Redirect } from 'react-router-dom'

class FormCreatePikka extends React.Component {
  state = {
    picture : '',
    caption: '',
    redirect: false
  }

  handlerChangeInputImage = (e) => {
    this.setState({
      picture : e.target.files[0]
    })
  }

  handlerChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlerSubmitCaption = async (e) => {
    e.preventDefault()
    console.log(this.state)
    const { picture, caption } = this.state

    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('picture', picture)
    
    const response = await fetchApi('/pikka','POST', formData)
    console.log(response)
    if (response.status === 200) {
      this.setState({
        caption: '',
        picture: '',
        redirect: true
      })
    }
  }

  render () {
    const { picture, caption, redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <form encType='multipart/form-data' onSubmit={this.handlerSubmitCaption}>
        <div className='form-group form-control-sm mb-2 m-0 p-0 mw-100 p-3'>
          <img id='blah' className='card-img-top h-100' src={picture ? URL.createObjectURL(picture):imageDefault} alt='your img' />
        </div>
        <div className='form-group form-control-sm mb-2 px-3'>
          <textarea className='form-control' id='message' name='caption' value={caption} onChange={this.handlerChangeInput} aria-label='With textarea' placeholder='Please enter your captions here...' rows='5' />
        </div>
        <div className='form-group'>
          <div className='row'>
            <div className='col-md-6 text-left'>
              <div id='blockSelectImage' className='form-group form-control-sm mb-2 px-3'>
                <div className='custom-file'>
                  <input type='file' name='picture' className='custom-file-input' style={{display: 'none'}} id='inputGroupFile01' accept='image/jpeg, image/png' onChange={this.handlerChangeInputImage} />
                  <label htmlFor='inputGroupFile01' className='btn btn-outline-success'>Select image</label>
                </div>
              </div>
            </div>
            <div className='col-md-6 text-right'>
              <div className='form-group form-control-sm mb-2 px-3'>
                <button className='btn btn-dark'>Upload</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default FormCreatePikka
