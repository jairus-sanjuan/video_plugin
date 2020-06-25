import React, { useEffect } from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const { id, title, description, thumbnail } = props
  useEffect(() => {
    console.log('Props :', props)
  }, [])

  return (
    <div className="row py-4">
      <div className="col-md-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail image_url={thumbnail} />
              </div>
              <div className="col-md-8">
                <div className="py-4">
                  <h4>{title}</h4>
                  <p>{description}</p>

                  <div className="cta-wrapper">
                    <Link
                      className="btn btn-secondary cta-btn"
                      to={`/videos/${id}`}
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

export default Item
