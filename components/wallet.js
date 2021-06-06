import detectEthereumProvider from "@metamask/detect-provider";

const isServer = typeof window === "undefined";

class Wallet {
  _provider = null;
  _isFirstLoad = true;

  // Ko se zazene stran, inicializiramo metamask, da vemo, ce ga sploh mamo
  async init() {
    if (!isServer) {
      if (this._isFirstLoad) {
        this._isFirstLoad = false;
        try {
          // Try to get etherium provider
          let provider = await detectEthereumProvider({ mustBeMetaMask: true });

          if (provider) {
            console.log("Ethereum successfully detected!");
            this._provider = provider;
          }
        } catch (error) {
          window.alert(
            "Non-Ethereum browser detected. Please install Metamask!",
          );
          return;
        }
      } else {
        console.log("Wallet init already called!");
        return;
      }
    }
  }

  getWallet() {
    if (this._provider == null) {
      //TODO How the fuck nardis, da pocaka, dokler ne dobi vrednosti in nato vrne?!?!
      this.init();
      return this._provider;
    } else {
      return this._provider;
    }
  }

  walletId() {
    if (sessionStorage.getItem("walletId") == null) {
      let id = this._wallet;
      sessionStorage.setItem("walletId", this);
    }
  }
}

export default new Wallet();
