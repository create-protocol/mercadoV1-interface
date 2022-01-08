import "./App.css";
import "./assets/css/muzix.css";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import './styles/global.css'
// import newsletter from './components/newsletter';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>mercado.studio</title>
        <meta name="description" content="A marketplace for artist" />
        <meta name="keywords" content="Muzix,NFT,Create protocall,Marketplace" />
      </Helmet>
      <Routes></Routes>
    </div>
  );
}

export default App;
