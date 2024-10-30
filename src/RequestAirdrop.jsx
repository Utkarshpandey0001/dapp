import {useWallet , useConnection} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";


export function RequestAirdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();

   async function Handleclick(){
        const publickey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
       await connection.requestAirdrop(publickey,amount * LAMPORTS_PER_SOL);
       alert("Success");
    }
    return(<div style={{paddingTop:'20px'}}>
        <input id="amount" type="text" placeholder="Enter amount" />
        <button onClick={ Handleclick }>Request airdrop</button>
    </div>)
}