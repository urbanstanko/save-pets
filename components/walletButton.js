import { useState, useContext } from "react";
import Wallet from "./wallet";

import useSSR from 'use-ssr';

const first_n_acc_numbers = 2;
const last_n_acc_numbers = 3;


function WalletButton() {
  const { isBrowser, isServer, isNative } = useSSR();
  const [account_name, setAccountName] = useState("Connect Wallet");
  
  console.log("Running on server: " + isServer);
  //console.log(isMetamaskInstalled);

  async function handleWalletClick() {
    let provider = Wallet.getWallet();

    if (provider === null) {
      console.log("Metamask is not installed!");
    } else {
      // Get accounts number
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accs) => {
          let first_part = accs[0].slice(0, 2 + first_n_acc_numbers); // +2 je za 0x pred stevilkami
          let last_part = accs[0].slice(
            accs[0].length - last_n_acc_numbers,
            accs[0].length,
          );

          setAccountName(first_part + "..." + last_part);
        })
        .catch((error) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log("Please connect to MetaMask.");
          } else {
            console.error(error);
          }
        });
    }

    //console.log(provider);
    // if (provider) {
    //   console.log("Etherium successfully detected!");
    // } else {

    // }
  }

  return (
    <button
      className="flex flex-row bg-tongue rounded-full px-4 py-2 hover:bg-tongue-dark
        focus:ring-2
        focus:ring-offset-cookie-dark
        transform transition hover:scale-110"
      onClick={handleWalletClick}
    >
      {account_name}
    </button>
  );
}

export default WalletButton;
