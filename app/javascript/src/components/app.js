import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Landing/Landing'
import Navbar from './Shared/Navbar/Navbar'
import UserForm from './User/Form'
import VideoForm from './Video/Form'
import Videos from './Video/Table/Table'
import './App.css'
import axios from '../../utils/req'
const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/session', {}).then((resp) => {
      sessionStorage.setItem('id', resp['data']['session']['id'])

      console.log(resp)
    })
  }, [])

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={UserForm} />
            <Route exact path="/upload" component={VideoForm} />
            <Route exact path="/videos" component={Videos} />
            {/* <Route exact path="/browse/:video_id" component={Video} /> */}
          </Switch>
        </div>
      </Fragment>
    </Router>
  )
}

// const app = () => {
//   return (
//     <Router>
//       <Fragment>
//         <Switch>
//           <Route path="/" component={Landing} />
//         </Switch>
//       </Fragment>
//     </Router>
//   )
// }

export default App
