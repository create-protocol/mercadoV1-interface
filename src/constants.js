import Previewnft from "./components/PreviewNft";
import Search from "./components/Search";
import Viewprofile from "./components/ViewProfile";
import page2 from "./mints/nfts/page2";

const routes = [
  {
    pathName: "HOME",
    path: "/",
  },
  {
    pathName: "SEARCH",
    path: "/SEARCH",
    component: Search,
  },
  {
    pathName: "MINT NFT",
    path: "/MINT NFT",
    component: page2,
  },
  {
    pathName: "VIEW PROFILE",
    path: "/VIEW PROFILE",
    component: Viewprofile,
  },
  {
    pathName: "CONNECT WALLET",
    path: "/CONNECT WALLET",
  },
  {
    pathName: "DISCOVER CREATORS",
    path: "/DISCOVER CREATORS",
  },
  {
    pathName: "DISCOVER COLLECTORS",
    path: "/DISCOVER COLLECTORS",
  },
  {
    pathName: "EXPLORE MARKETPLACE",
    path: "/EXPLORE MARKETPLACE",
  },
  {
    pathName: "FAQ & HELP",
    path: "/FAQ & HELP",
  },
  {
    pathName: "ABOUT MUZIX",
    path: "/ABOUT MUZIX",
    component: Previewnft,
  },
  {
    pathName: "LOG OUT",
    path: "/LOG OUT",
  },
];

export { routes };
