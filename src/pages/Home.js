import React from 'react'
import { fetchApi } from '../services/server'

class Home extends React.Component {
  state = {
    pikkaData: '',
    isLoading: true,
  }

  async componentDidMount() {
    try {
      const response = await fetchApi('/pikka', 'GET')
      console.log(response.data)
      this.setState({ pikkaData: response.data })
    } catch (err) {
      alert(err.message)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { pikkaData, isLoading } = this.state
    if (isLoading) return <div style={{
      margin: 'auto',
      marginTop: '10%',
      marginLeft: '40%',
      marginRight: '40%',
      fontSize: '60px'
    }}>Loading</div>

    return (
      <div>
        <article className="container mt-5">
          <div className="row pt-4">

            <div className="col-sm-6 col-md-3">

              <div className="card mb-3">

                <div className="card-body py-0 px-3">
                  <h5 className="card-title mt-2">caption</h5>
                  <p className="card-text mb-2">created_at</p>

                  <div className="border-top py-2">
                    <small className="text-muted">21 Likes</small>
                    <small className="text-muted">2 Comments</small>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </article>
      </div>
    )
  }
}

export default Home
