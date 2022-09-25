import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Mainnet, DAppProvider, Config, Mumbai, useEthers } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

import { BrowserRouter } from 'react-router-dom';

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: 'https://rpc-mumbai.maticvigil.com',
  }
}

ReactDOM.render(
  <DAppProvider config={config}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </DAppProvider>,
  document.getElementById('root')
);


