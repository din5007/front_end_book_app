import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'

const App = () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  </Fragment>
)

export default App