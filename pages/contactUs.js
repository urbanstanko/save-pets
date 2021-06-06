import Meta from "../components/meta"; // Vsi podatki so v MY_SEO od config.js
import PageLayout from "../components/pageLayout";

export default function Home() {
  return (
    <PageLayout selectedPage="contactUs">
      <Meta />
    </PageLayout>
  );
}
