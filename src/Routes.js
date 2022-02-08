import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import NavBar1 from './components/Navbar1'
import Home from './components/Home'
import ScrollToTop from './ScrollToTop'
import { routes } from './constants'
import Previewnft from './components/PreviewNft'
import page2 from './mints/nfts/page2'
import page3 from './mints/nfts/page3'
import page4 from './mints/nfts/page4'
import page6 from './mints/nfts/page6'
import page7 from './mints/nfts/page7'
import page8 from './mints/nfts/page8'
import Mintnft from './components/MintNft'
import DescPage from './components/DescriptionPage'
import Faq from './components/FAQ'
import TeamPagefinal from './components/TeamPagefinal'
import Viewprofile from './components/ViewProfile'
import About from './components/Infopage'
import Footer from './components/Footer'
import BlogPage from './components/BlogPage'
import BlogDetailPage from './components/BlogDetailPage'
import Landingpage from './components/Landingpage'
const Routes = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
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
