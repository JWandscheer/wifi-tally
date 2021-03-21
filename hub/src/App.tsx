import React from 'react'
import MyTheme from './components/layout/MyTheme'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import ConfigPage from './pages/ConfigPage'
import TallyLogPage from './pages/TallyLogPage'
import WebTallyPage from './pages/WebTallyPage'
import FlasherIniPage from './pages/FlasherIniPage'

function App() {
  return (
    <Router>
      <MyTheme>
        <CssBaseline />
        <Switch>
          <Route exact path="/tally/:tallyId">
            <WebTallyPage />
          </Route>
          <Route exact path="/tally/:tallyId/log">
            <TallyLogPage />
          </Route>
          <Route exact path="/config">
            <ConfigPage />
          </Route>
          <Route exact path="/flasher">
            <FlasherIniPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </MyTheme>
    </Router>
  )
}

export default App;
