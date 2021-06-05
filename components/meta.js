import Head from "next/head";
import { MY_SEO } from "../config";

export default function Meta() {
  return (
    <Head>
      <title>{MY_SEO.title}</title>
      <meta property='og:title' content={MY_SEO.title} key='title'></meta>
      <meta
        property='og:description'
        content={MY_SEO.description}
        key='description'
      ></meta>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
}
