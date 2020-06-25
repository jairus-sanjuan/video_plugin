import React from 'react'

const Thumbnail = ({ image_url }) => {
  return (
    <div className="py-4">
      <img
        src={`http://localhost:3000/${image_url}`}
        style={{ height: 'auto', width: '150px' }}
      />
    </div>
  )
}
export default Thumbnail
