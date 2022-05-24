import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  useWeb3React,
} from '@web3-react/core';
import { injected } from './connector';
import { useEagerConnect, useInactiveListener } from './hooks';
import { formatEther } from "@ethersproject/units";

export const WalletContext = React.createContext(null);



const connectorsByName = {
  Injected: injected,
};

export const WalletProvider = ({ children }) => {
  const {
    activate,
    account,
    library,
    connector,
    active,
    deactivate,
    chainId,
    error,
  } = useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false); // Should disable connect button while connecting to MetaMask
  const [isLoading, setIsLoading] = useState(true);

  // Check when App is Connected or Disconnected to MetaMask
  const handleIsActive = useCallback(() => {
    console.log('App is connected with MetaMask ', active);
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  // Connect to MetaMask wallet
  const metaConnect = async () => {
    setActivatingConnector(connectorsByName['Injected']);
    activate(connectorsByName['Injected']);
  };

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    console.log('Disconnecting wallet from App...');
    try {
      await deactivate();
    } catch (e) {
      console.log('Error on disconnnect: ', e);
    }
  };

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState();
  React.useEffect(() => {
    console.log('running');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(true);

  // set up block listener
  const [blockNumber, setBlockNumber] = React.useState();
  React.useEffect(() => {
    console.log('running');
    if (library) {
      let stale = false;

      console.log('fetching block number!!');
      library
        .getBlockNumber()
        .then(blockno => {
          if (!stale) {
            setBlockNumber(blockno);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = blockno => {
        setBlockNumber(blockno);
      };
      library.on('block', updateBlockNumber);

      return () => {
        library.removeListener('block', updateBlockNumber);
        stale = true;
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]);

  // fetch eth balance of the connected account
  const [ethBalance, setEthBalance] = React.useState();
  React.useEffect(() => {
    console.log('running');
    if (library && account) {
      let stale = false;

      library
        .getBalance(account)
        .then(balance => {
          if (!stale) {
            setEthBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setEthBalance(null);
          }
        });

      return () => {
        stale = true;
        setEthBalance(undefined);
      };
    }
  }, [library, account, chainId]);

  const balanceInEth = ethBalance === undefined
            ? "..."
            : ethBalance === null
            ? "Error"
            : `${parseFloat(formatEther(ethBalance)).toPrecision(4)}`;

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      metaConnect,
      disconnect,
      shouldDisable,
      library,
      chainId,
      ethBalance,
      blockNumber,
      error,
      balanceInEth,
    }),
    [
      isActive,
      account,
      isLoading,
      metaConnect,
      disconnect,
      shouldDisable,
      library,
      chainId,
      ethBalance,
      blockNumber,
      error,
      balanceInEth
    ],
  );

  return (
    <WalletContext.Provider value={values}>
      {children}
    </WalletContext.Provider>
  );
};

export default function useWallet() {
  const context = React.useContext(WalletContext);
  if (context === undefined) {
    throw new Error(
      'useWallet hook must be used with a WalletProvider component',
    );
  }

  return context;
}
