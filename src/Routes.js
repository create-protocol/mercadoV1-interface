import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ScrollToTop from "./ScrollToTop";
import { routes } from "./constants";
import Previewnft from "./components/PreviewNft";
import page2 from "./mints/nfts/page2";
import page3 from "./mints/nfts/page3";
import page4 from "./mints/nfts/page4";
import page6 from "./mints/nfts/page6";
import page7 from "./mints/nfts/page7";
import page8 from "./mints/nfts/page8";
import Mintnft from "./components/MintNft";
import DescPage from "./components/DescriptionPage"
import Faq from './components/FAQ';
import TeamPagefinal from './components/TeamPagefinal';
import Viewprofile from "./components/ViewProfile";
import About from './components/Infopage';
import Footer from "./components/Footer";
const Routes = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar}></Route>
        <div style={{marginTop:"10rem"}}></div>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/page2" component={page2}></Route>
            <Route exact path="/page3" component={page3}></Route>
            <Route exact path="/page4" component={page4}></Route>
            <Route exact path="/asset/create" component={Mintnft}></Route>
            <Route exact path="/page6" component={page6}></Route>
            <Route exact path="/page7" component={page7}></Route>
            <Route exact path="/page8" component={page8}></Route>
            <Route exact path="/faq" component={Faq}    ></Route>
            <Route exact path="/faq" component={Faq}    ></Route>
            <Route exact path="/teampage" component={TeamPagefinal}    ></Route>
            <Route exact path="/descpage" component={DescPage}></Route>
            <Route exact path="/creator/bharat-thakur" component={Viewprofile}    ></Route>
            <Route exact path="/about" component={About}    ></Route>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path.replaceAll(" ", "-")}
                component={route.component || Home}
              ></Route>
            ))}
            <Route exact path={"/preview-nft"} component={Previewnft}></Route>
            
          </Switch>

        </ScrollToTop>
        <Route path="/" component={Footer}></Route>
        
      </Router>
    </div>
  );
};

export default Routes;
