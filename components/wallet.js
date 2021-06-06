
class Wallet {
  message = 0;

  get wallet() {
    let ret = this.message;
    this.message += 1;
    return ret;
  }
}

export default new Wallet;