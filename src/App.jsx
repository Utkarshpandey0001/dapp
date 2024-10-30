
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import {RequestAirdrop} from './RequestAirdrop.jsx';
import {Showbalance} from './showbalance.jsx';
import { Sendtoken } from './sendtoken.jsx';
function App() {
  

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoconnect>
        <WalletModalProvider>
          <div style = {{display:'flex',justifyContent:'space-between',width:'100vh'}}>
            <WalletMultiButton></WalletMultiButton>
            <WalletDisconnectButton></WalletDisconnectButton>
           </div>
           <RequestAirdrop />
           <Showbalance />
           <Sendtoken />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  )
}

export default App;
