import React from 'react'

const Thumbnail = ({ url }) => {
  return <video controls src={`http://localhost:3000/${url}`} />
}
export default Thumbnail
