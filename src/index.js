import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Signin from './components/Signin'
import NotFound from './components/Notfound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => {
  const [pseudo, setPseudo] = useState('')
  const [icon, setIcon] = useState('')
  const handleChange = (e) => setPseudo(e.target.value)
  const handleIcon = (link) => setIcon(link)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Signin handlePseudo={(e) => handleChange(e)} handleIcon={(link) => handleIcon(link)} pseudo={pseudo} />} />
        <Route path='/app' render={() => <App pseudo={pseudo} icon={icon} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
