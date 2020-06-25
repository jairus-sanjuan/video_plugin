import React, { useEffect } from 'react'
import axios from 'axios'

const Landing = () => {
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/session', {
  //       withCredentials: true,
  //     })
  //     .then((resp) => {
  //       console.log("Response : ",resp)
  //     })
  // }, [])

  return (
    <div className="Landing">
      <h1>Hello this is landing page.</h1>
    </div>
  )
}
export default Landing
