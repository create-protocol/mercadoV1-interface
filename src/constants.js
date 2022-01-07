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
import Landingpage from "./components/Landingpage";
const routes = [
  {
    pathName: "HOME",
    path: "/",
  },
  // {
  //   pathName: "SEARCH",
  //   path: "/SEARCH",
  //   component: Search,
  // },
  // {
  //   pathName: "MINT NFT",
  //   path: "/MINT NFT",
  //   component: page2,
  // },
  {
    pathName: "VIEW PROFILE",
    path: "/creator/bharat-thakur",
    component: Viewprofile,
  },
  // {
  //   pathName: "CONNECT WALLET",
  //   path: "/CONNECT WALLET",
  // },
  // {
  //   pathName: "DISCOVER CREATORS",
  //   path: "/DISCOVER CREATORS",
  // },
  // {
  //   pathName: "DISCOVER COLLECTORS",
  //   path: "/DISCOVER COLLECTORS",
  // },
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
    pathName: "landingpage",
    path: "/mainpage",
    component: Landingpage,
  },
  // {
  //   pathName: "LOG OUT",
  //   path: "/LOG OUT",
  // },
];

export { routes };
