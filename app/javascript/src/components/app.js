import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Landing/Landing'
import Navbar from './Shared/Navbar/Navbar'
import UserForm from './User/Form'
import VideoForm from './Video/Form'
import Videos from './Video/Table/Table'
import './App.css'
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={UserForm} />
            <Route exact path="/upload" component={VideoForm} />
            <Route exact path="/browse" component={Videos} />
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
