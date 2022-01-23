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
import Privacy from "./components/privacy";
import Collections from "./components/Collections"
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
    pathName: "main",
    path: "/artist",
    component: ArtisPage,
  },
  {
    pathName: "blog",
    path: "/blog",
    component: Blog,
  },
  {
    pathName: "privacy",
    path: "/privacy",
    component: Privacy,
  },
  {
    pathName: "collections",
    path: "/collections",
    component: Collections,
  },
  
];

export { routes };
