import detectEthereumProvider from "@metamask/detect-provider";

import { useState, useEffect } from "react";

const first_n_acc_numbers = 2;
const last_n_acc_numbers = 3;

function WalletButton() {
  const [account_name, setAccountName] = useState("Connect Wallet");

  let provider;

  async function getProvider() {
    try {
      provider = await detectEthereumProvider();
      if (provider != null) {
        console.log("Metamask is installed!");
      } else {
        console.log("ERROR: metamask is null!");
      }
    } catch (error) {
      console.log("ERROR: could not get metamask... please install it!");
      console.log(error);
    }
  }

  async function handleWalletClick() {
    console.log("You clicked me!");

    // Sets the provider variable with metamask provider
    await getProvider();
    if (provider === undefined) {
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
      className="bg-tongue rounded-full px-4 py-2 hover:bg-tongue-light
        focus:ring-2
        focus:ring-offset-tongue-dark"
      onClick={handleWalletClick}
    >
      {account_name}
    </button>
  );
}

WalletButton.acc_name = "Hello world";

export default WalletButton;
