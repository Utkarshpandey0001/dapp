import {useConnection,useWallet} from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL} from "@solana/web3.js";

export function Showbalance(){
   const {connection} = useConnection();
   const wallet = useWallet();

   async function getbalance(){
     const balance = await connection.getBalance(wallet.publicKey);
     document.getElementById("balance").innerHTML = balance/LAMPORTS_PER_SOL;
   }
  
   return(<div style={{paddingTop:'20px'}}>
    <button onClick={getbalance}>Balance:</button> <span id="balance"></span> sol
   </div>)

}