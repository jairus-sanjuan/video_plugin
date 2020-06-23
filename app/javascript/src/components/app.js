import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Landing/Landing'
import Navbar from './Shared/Navbar/Navbar'
import "./App.css"
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" component={Landing} />
        <Switch>
        </Switch>
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
