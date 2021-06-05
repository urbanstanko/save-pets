import Head from 'next/head'
import Link from 'next/link'
import Meta from '../components/meta' // Vsi podatki so v MY_SEO od config.js
import Header from '../components/header'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Meta />
      <Head>
        // TODO: Zamenjej z logotom tapravim
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header current_page_name="getSavePets">

      </Header>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
