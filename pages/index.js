import Meta from "../components/meta"; // Vsi podatki so v MY_SEO od config.js
import PageLayout from "../components/pageLayout";
import Wallet from "../components/wallet";

export default function Home() {
  Wallet.init();
  return (
    <PageLayout selectedPage="">
      //TODO vsaka stran ima svoj meta, ker ima druge slike, podatke na strani
      <Meta />
    </PageLayout>
  );
}
