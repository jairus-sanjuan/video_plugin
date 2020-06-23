import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Landing/Landing'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
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
