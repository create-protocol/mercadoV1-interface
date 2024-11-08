import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';

import {
  UnsupportedChainIdError
} from '@web3-react/core';

export const  getErrorMessage = (error) => {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  }
  if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  }
  if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access your Ethereum account.';
  }
  console.error(error);
  return 'An unknown error occurred. Check the console for more details.';
}
