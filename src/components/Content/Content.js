import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './Content.css'
import Home from '../../routes/Home/Home'
import Hairdressers from '../../routes/Hairdressers/Hairdressers'

const Content = () => {

  return (
    <main>
      {/* <Router> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hairdressers">
            <Hairdressers />
          </Route>
        </Switch>
      {/* </Router> */}
    </main>
  )
}

export default Content