import Meta from "../components/meta"; // Vsi podatki so v MY_SEO od config.js
import PageLayout from "../components/pageLayout";

export default function Home() {
  return (
    <PageLayout selectedPage="">
      //TODO vsaka stran ima svoj meta, ker ima druge slike, podatke na strani
      <Meta />
    </PageLayout>
  );
}
