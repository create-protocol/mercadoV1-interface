import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ScrollToTop from './utils/ScrollToTop'
import { routes } from './constants'
import Footer from './components/Footer'

const Routes = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
        <br/>
        <br/>
        <br/>
        <br/>
        <ScrollToTop>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path.replaceAll(' ', '-')}
                component={route.component || Home}
              ></Route>
            ))}
          </Switch>
        </ScrollToTop>
        <Route path="/" component={Footer}></Route>
      </Router> 
    </div>
  )
}

export default Routes
