import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from 'semantic-ui-react'
import './Content.css'
import Home from '../../routes/Home/Home'
import Hairdresser from '../../routes/Hairdresser/Hairdresser'
import Hairdressers from '../../routes/Hairdressers/Hairdressers'
import PageNotFound from '../../routes/PageNotFound/PageNotFound'

const Content = () => {

  return (
    <main>
      {/* <Router> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hairdressers">
            <Hairdressers />
          </Route>
          <Route path="/hairdressers/:id">
            <Hairdresser />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      {/* </Router> */}
    </main>
  )
}

export default Content