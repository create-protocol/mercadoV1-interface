import Previewnft from "./components/PreviewNft";
// import Search from "./components/Search";
import Viewprofile from "./components/ViewProfile";
// import page2 from "./mints/nfts/page2";
import faq from './components/FAQ';
import DescriptionPage from "./components/DescriptionPage";
import Profile from './components/Profile'
import Infopage from './components/Infopage'
import ContactUs from "./components/ContactUs";
import Mintnft from "./components/MintNft";
import Landingpage from './components/Landingpage'
import Descpage from "./components/Descpage";
import ArtisPage from "./components/ArtistBio";
import Blog from "./components/Blog"
import Collections from "./components/Collections"
import AllNFT from './components/AllNFT'
import Privacy from "./components/Privacy/Privacy";
import CommGuide from "./components/Privacy/CommGuide";
import CookiesPolicy from "./components/Privacy/Cookie";
const routes = [
  {
    pathName: "HOME",
    path: "/",
  },

  {
    pathName: "VIEW PROFILE",
    path: "/creator/bharat-thakur",
    component: Viewprofile,
  },
 
  {
    pathName: "EXPLORE MARKETPLACE",
    path: "/EXPLORE MARKETPLACE",
  },
  {
    pathName: "Description Page",
    path: "/asset/:itemid",
    component:DescriptionPage,
  },
  {
    pathName: "FAQ & HELP",
    path: "/FAQ & HELP",
    component: faq,
  },
  {
    pathName: "ABOUT MUZIX",
    path: "/ABOUT MUZIX",
    component: Previewnft,
  },
  {
    pathName: "profile",
    path: "/profile/:addr",
    component: Profile,
  },
  {
    pathName: "profile",
    path: "/info_page",
    component: Infopage,
  },
  {
    pathName: "contactus",
    path: "/contactus",
    component: ContactUs,
  },
  {
    pathName: "mintnft",
    path: "/asset/create",
    component: Mintnft,
  },
  {
    pathName: "main",
    path: "/main",
    component: Landingpage,
  },
  {
    pathName: "main",
    path: "/desc2",
    component: Descpage,
  },
  
  {
    pathName: "artist",
    path: "/artist",
    component: ArtisPage,
  },
  {
    pathName: "blog",
    path: "/blog",
    component: Blog,
  },
  {
    pathName: "privacy-policy",
    path: "/privacy-policy",
    component: Privacy,
  },
   {
    pathName: "community-guidelines",
    path: "/community-guidelines",
    component: CommGuide,
  },
  {
    pathName: "cookies-policy",
    path: "/cookies-policy",
    component: CookiesPolicy,
  },
  {
    pathName: "collections",
    path: "/collections",
    component: Collections,
  },
  {
    pathName: "allnft",
    path: "/allnft",
    component: AllNFT,
  },
  
];

export { routes };
