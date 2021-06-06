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

  getProvider() {
    try {
      detectEthereumProvider()
        .then((provider) => {
          this._wallet = provider;
        })
        .catch((err) => console.log(err));

      if (this._wallet != null) {
        console.log("Metamask is installed!");
      } else {
        console.log("ERROR: metamask is null!");
      }
    } catch (error) {
      console.log("ERROR: could not get metamask... please install it!");
      console.log(error);
    }
  }

  getWallet() {
    if (this._wallet == null) {
      // Dobimo wallet in vrnemo
      this.getProvider();

      return this._wallet;
    } else {
      // Ze imamo cachan wallet in kr to vrnemo
      return this._wallet;
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
