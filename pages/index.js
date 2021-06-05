import Head from 'next/head'
import Link from 'next/link'
import Meta from '../components/meta' // Vsi podatki so v MY_SEO od config.js
import Header from '../components/header'

export default function Home() {
  
  return (
    <div className="flex flex-col px-10 pt-10">
      <Meta />
      <Head>
        // TODO: Zamenjej z logotom tapravim
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header current_page_name="">

      </Header>
    </div>
  )
}
