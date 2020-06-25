import React, { useState, useEffect } from 'react'
import Video from './Video'
import { Link } from 'react-router-dom'
import axios from '../../../../utils/req'

const ActiveItem = ({ match }) => {
  const [video, setVideo] = useState({
    file: null,
    title: '',
    description: '',
  })

  useEffect(() => {
    axios
      .get(
        `/api/v1/users/${sessionStorage.getItem('id')}/videos/${
          match.params.id
        }`
      )
      .then((resp) => {
        console.log('Video Response : ', resp)
      })
  }, [])
  return (
    <div className="row py-4">
      <div className="col-md-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <Video file={video.file} />
                <div className="py-4">
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>

                  <div className="cta-wrapper">
                    <Link
                      className="btn btn-secondary cta-btn"
                      to={`/videos/${match.params.id}`}
                    >
                      Embed this video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem
