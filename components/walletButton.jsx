import detectEthereumProvider from "@metamask/detect-provider";

export default function WalletButton() {
  async function setProvider() {
    let provider;
    try {
      provider = await detectEthereumProvider();
      if (provider != null) {
        console.log(provider);
        startApp(provider);
      } else {
        console.log("ERROR: metamask is null!");
      }
    } catch (error) {
      console.log("ERROR: could not get metamask... please install it!");
      console.log(error);
    }
  }

  function handleWalletClick() {
    console.log("You clicked me!");

    setProvider();
    //console.log(provider);
    // if (provider) {
    //   console.log("Etherium successfully detected!");
    // } else {

    // }
  }
  return (
    <button
      className='bg-tongue rounded-full px-4 py-2 hover:bg-tongue-light
        focus:ring-2
        focus:ring-offset-tongue-dark'
      onClick={handleWalletClick}
    >
      Connect Wallet
    </button>
  );
}
