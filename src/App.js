import "./App.css";
import "./assets/css/muzix.css";
import "antd/dist/antd.css";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import './styles/global.css';
import {Provider} from 'react-redux';
import { store } from "./store";
import { WalletProvider } from './hooks/wallet/provider';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// import newsletter from './components/newsletter';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>mercado.studio</title>
        <meta name="description" content="A marketplace for artist" />
        <meta name="keywords" content="mercado studio,muzix mercado studio,mercado NFT,Create protocall,Marketplace ,mercado nft " />
      </Helmet>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <WalletProvider>
            <Routes />
          </WalletProvider>
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
