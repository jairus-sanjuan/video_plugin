import React from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'
const Item = ({ title, description, thumbnail, file }) => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="text-center">
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail url={file} />
              </div>
              <div className="col-md-8">
                <div className="py-4">
                  <h4>{title}</h4>
                  <p>{description}</p>

                  <div className="cta-wrapper">
                    <Link className="btn cta-btn">Embed this video</Link>
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
