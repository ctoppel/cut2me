import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css'
import Header from '../Header/Header.js'
import Content from '../Content/Content.js'
import Home from '../../routes/Home/Home'
import Hairdressers from '../../routes/Hairdressers/Hairdressers'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
