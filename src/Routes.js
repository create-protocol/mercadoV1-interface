import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ScrollToTop from './utils/ScrollToTop'
import { routes } from './constants'
import Footer from './components/Footer'

import BlogPage from './components/BlogPage'
import BlogDetailPage from './components/BlogDetailPage'
import Landingpage from './components/Landingpage'
import CommGuide from './components/Privacy/CommGuide'
import { useState } from 'react'
const Routes = () => {
  const [lang, setLang] = useState("EN")
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
        
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Landingpage}></Route>
            <Route exact path="/page2" component={page2}></Route>
            <Route exact path="/page3" component={page3}></Route>
            <Route exact path="/page4" component={page4}></Route>
            <Route exact path="/asset/create" component={Mintnft}></Route>
            <Route exact path="/page6" component={page6}></Route>
            <Route exact path="/page7" component={page7}></Route>
            <Route exact path="/page8" component={page8}></Route>
            <Route exact path="/faq" component={Faq}></Route>
            <Route exact path="/teampage" component={TeamPagefinal}></Route>
            <Route exact path="/descpage" component={DescPage}></Route>
            <Route exact path="/commduide" component={CommGuide}></Route>
            {/* <Route exact path="/landing" component={Landingpage}></Route> */}
            <Route
              exact
              path="/creator/bharat-thakur"
              component={Viewprofile}
            ></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/blog" component={BlogPage}></Route>
            <Route exact path="/blog/:id" component={BlogDetailPage}></Route>

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
        <Route path="/" >
          <Footer lang={lang} setLang={code => setLang(code)} />
        </Route>
      </Router>
    </div>
  )
}

export default Routes
