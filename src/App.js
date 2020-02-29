import React from 'react'
import './App.css'
import Login from './components/Login'
import Charts from './components/Charts'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/chart' exact component={Charts} />
      </Router>
    )
  }
}
export default App
