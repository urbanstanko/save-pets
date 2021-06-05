import Head from "next/head";
import Link from "next/link";
import Meta from "./meta"; // Vsi podatki so v MY_SEO od config.js
import Header from "./header";

export default function PageLayout({ selectedPage, children }) {
  return (
    <div className="flex flex-col px-10 pt-10">
      <Head>
        // TODO: Zamenjej z logotom tapravim
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header current_page_name={selectedPage}></Header>

      {children}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ❤
        </a>
      </footer>
    </div>
  );
}
