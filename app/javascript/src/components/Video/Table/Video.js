import React from 'react'

const Video = ({ file }) => {
  // return <video controls src={`http://localhost:3000/${url}`} />
  return (
    <div className="py-4">
      <video
        controls
        src={`http://localhost:3000/${file}`}
        className="w-100 v-100"
      />
    </div>
  )
}
export default Video
