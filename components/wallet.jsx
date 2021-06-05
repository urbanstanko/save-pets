const walletStorageName = "cryptoWallet";

const isServer = typeof window === "undefined";

export const Wallet = () => {
  // nastavljamo denarnico samo na clientu
  if (!isServer) {
    if (localStorage.getItem(walletStorageName) === null) {
      // Nimamo se shranjene denarnice
      localStorage.setItem();
    }
  }
};
